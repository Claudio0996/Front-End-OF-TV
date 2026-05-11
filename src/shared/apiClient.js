import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
});

export const setAuthInterceptor = (dispatch) => {
  instance.interceptors.response.use(
    function onSuccess(response) {
      return response;
    },
    async function onInvalidToken(error) {
      const originalRequest = error.config;

      if (error.response?.status === 401) {
        try {
          if (!originalRequest._retry) {
            originalRequest._retry = true;
            const newResponse = await instance.get("auth/refresh");

            originalRequest.headers.Authorization = `Bearer ${newResponse.data.token}`;
            dispatch({ type: "ALTER_TOKEN", payload: newResponse.data.token });

            return instance(originalRequest);
          }
        } catch (err) {
          dispatch({ type: "REVOKE_DATA" });
        }
      }
      throw error;
    },
  );
};

export const getSlides = async (token) => {
  console.log(token);
  const response = await instance.get("slides", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getActiveSlides = async () => {
  const response = await instance.get("active-slides");

  return response.data;
};

export const deleteSlide = async ({ token, id }) => {
  const response = await instance.delete(`slide/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const createSlide = async ({ token, formData }) => {
  const response = await instance.post("slide", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const loginUser = async (userData) => {
  const response = await instance.post("auth/login", userData);

  return response.data;
};

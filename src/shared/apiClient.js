export const getSlides = async () => {
  const response = await fetch("http://localhost:3000/slides");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message);
  }

  return resData.data;
};

export const getActiveSlides = async () => {
  const response = await fetch("http://localhost:3000/active-slides");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message);
  }

  return resData.data;
};

export const deleteSlide = async (id) => {
  const response = await fetch(`http://localhost:3000/slide/${id}`, {
    method: "DELETE",
  });
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message);
  }

  return resData;
};

export const createSlide = async (formData) => {
  const response = await fetch("http://localhost:3000/slide", {
    method: "POST",
    body: formData,
  });

  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.message);
  }

  return resData;
};

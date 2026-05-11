import { createContext, useReducer, useEffect } from "react";

import { setAuthInterceptor } from "../../../shared/apiClient";

import authReducer from "./authReducer";

const initialValue = {
  user: null,
  token: null,
};

export const AuthContext = createContext(initialValue);

export default function AuthContextProvider({ children }) {
  const [authState, authDispatch] = useReducer(authReducer, initialValue);

  useEffect(() => {
    setAuthInterceptor(authDispatch);
  }, []);

  const ctxValue = {
    state: authState,
    dispatch: authDispatch,
  };
  return <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>;
}

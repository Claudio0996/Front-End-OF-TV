import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import useAuth from "./hooks/useAuth";
import { loginUser } from "../../shared/apiClient";

import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const { dispatch } = useAuth();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: loginUser,
    onSuccess: (responseData) => {
      dispatch({ type: "SET_USER", payload: { user: responseData.data.user, token: responseData.data.token } });
      navigate("/admin");
    },
  });

  const [emailField, setEmailField] = useState({ value: "", error: "" });
  const [passwordField, setPasswordField] = useState({ value: "", error: "" });

  function handleEmailChange(value) {
    setEmailField((prev) => ({ error: "", value: value }));
  }

  function handlePasswordChange(value) {
    setPasswordField((prev) => ({ error: "", value: value }));
  }

  function handleEmailValidation(value) {
    if (!value) {
      setEmailField((prev) => ({ ...prev, error: "Email não pode estar em branco" }));
    }
  }

  function handlePasswordValidation(value) {
    if (!value) {
      setPasswordField((prev) => ({ ...prev, error: "Senha não pode estar em branco" }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const objectData = {
      email: emailField.value,
      password: passwordField.value,
    };

    mutate(objectData);
  }

  if (isError) {
    console.log(error);
  }

  return (
    <section className={styles.container}>
      <div className={styles.content_container}>
        <div className={styles.container_header}>
          <img src="/logo.png" alt="" className={styles.container_image} />
          <h1>Bem vindo de volta</h1>
        </div>

        <form className={styles.form_container} onSubmit={handleSubmit}>
          <div className={styles.form_field}>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.form_field_input}
              placeholder="Email"
              value={emailField.value}
              onChange={(e) => handleEmailChange(e.target.value)}
              onBlur={(e) => handleEmailValidation(e.target.value)}
            />
            {emailField.error && <p className={styles.error_warning}> {emailField.error}</p>}
          </div>

          <div className={styles.form_field}>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.form_field_input}
              placeholder="Senha"
              value={passwordField.value}
              onChange={(e) => handlePasswordChange(e.target.value)}
              onBlur={(e) => handlePasswordValidation(e.target.value)}
            />
            {passwordField.error && <p className={styles.error_warning}> {passwordField.error}</p>}
          </div>

          <button
            type="submit"
            className={styles.form_button}
            disabled={!!emailField.error || !!passwordField.error || isPending}
          >
            Logar
          </button>
        </form>
      </div>

      {isError && <p className={styles.error_warning}>{error.message}</p>}
    </section>
  );
}

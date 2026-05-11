import { useState, useRef } from "react";
import { ImageUploader } from "../ImageUploader/ImageUploader";
import styles from "./SlideForm.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSlide } from "../../../../shared/apiClient";
import useAuth from "../../../auth/hooks/useAuth";

export default function SlideForm({ onFulffiled }) {
  const { state } = useAuth();
  const queryClient = useQueryClient();
  let previewUrl;
  const [file, setFile] = useState(null);
  const fileType = file ? file.type : null;

  const { data, mutate, isPending, isError, error } = useMutation({
    mutationFn: createSlide,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["slides"] });
      onFulffiled();
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!file) {
      return;
    }

    const fd = new FormData(e.target);
    fd.append("mediaType", fileType.split("/")[0]);

    mutate({ token: state.token, formData: fd });
  }

  previewUrl = file ? URL.createObjectURL(file) : null;

  function onChangeFile(file) {
    setFile(file);
  }
  return (
    <form className={styles.form_container} onSubmit={handleSubmit}>
      <label className={styles.form_input_container} htmlFor="title">
        Título
        <input className={styles.form_input} type="text" id="title" name="title" required />
      </label>

      <ImageUploader onChangeFile={onChangeFile} fileUrl={previewUrl} fileType={fileType} />

      <div className={styles.form_input_container_dates}>
        <label className={styles.form_input_container}>
          Data inicial
          <input
            type="date"
            defaultValue={new Date().toISOString()}
            className={styles.form_input}
            name="startAt"
            required
          />
        </label>
        <label className={styles.form_input_container}>
          Data final
          <input
            type="date"
            defaultValue={new Date().toISOString()}
            className={styles.form_input}
            name="endAt"
            required
          />
        </label>
      </div>
      <button disabled={isPending}>{isPending ? "Enviando..." : "Cadastar"}</button>
      {isError && <p>{error.message}</p>}
    </form>
  );
}

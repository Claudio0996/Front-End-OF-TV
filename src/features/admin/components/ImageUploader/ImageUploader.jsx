import styles from "./ImageUploader.module.css";

export function ImageUploader({ fileUrl, fileType, onChangeFile }) {
  let content;

  if (fileUrl && fileType.startsWith("image")) {
    content = <img src={fileUrl} className={styles.image_preview} alt="Imagem a ser publicada" />;
  } else if (!fileUrl) {
    content = <p>Clique aqui para fazer upload de imagem</p>;
  } else {
    content = <video src={fileUrl} autoPlay muted loop></video>;
  }
  return (
    <label htmlFor="image" className={styles.image_container}>
      Slide
      <div className={styles.image}>{content}</div>
      <input
        type="file"
        name="image"
        id="image"
        className={styles.image_hidden}
        required
        accept="image/*,video/*"
        onChange={(e) => {
          const file = e.target.files[0];
          onChangeFile(file);
        }}
      />
    </label>
  );
}

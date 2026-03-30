import SlideForm from "../SlideForm/SlideForm";
import styles from "./SlideModal.module.css";

export default function SlideModal({ onCloseModal }) {
  return (
    <div className={styles.modal_overlay} onClick={onCloseModal}>
      <div
        className={styles.modal_container}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2 className={styles.modal_title}>Novo Slide</h2>
        <SlideForm onFulffiled={onCloseModal} />
      </div>
    </div>
  );
}

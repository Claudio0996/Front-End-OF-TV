import style from "./Header.module.css";

export default function Header({ totalSlides, onOpenModal }) {
  return (
    <header className={style.header}>
      <div className={style.header_container}>
        <h1 className={style.header_title}>Gerenciar Slides</h1>
        <p>{totalSlides ? totalSlides : 0} Slides cadastrados</p>
      </div>

      <button
        className={style.header_button}
        onClick={() => {
          onOpenModal("create");
        }}
      >
        + Novo Slide
      </button>
    </header>
  );
}

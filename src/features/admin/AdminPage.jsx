import { useState } from "react";
import useSlides from "./hooks/useSlides";

import styles from "./AdminPage.module.css";
import Header from "./components/Header/Header";
import FilterSearch from "./components/FilterSearch/FilterSearch";
import SlideList from "./components/SlideList/SlideList";
import SlideModal from "./components/SlideModal/SlideModal";

export default function AdminPage() {
  const [filter, setFilter] = useState("all");
  const [activeModal, setActiveModal] = useState(null);
  const { slides, isPending, isError, error } = useSlides();

  const selectFilter = (value) => {
    setFilter((prev) => (prev === value ? "all" : value));
  };

  const toggleModal = (value) => {
    setActiveModal(value);
  };
  const filteredData = filter === "all" ? slides : slides.filter((slide) => slide.status === filter);

  return (
    <>
      {activeModal === "create" && <SlideModal onCloseModal={toggleModal} />}
      <section className={styles.container}>
        <Header onOpenModal={toggleModal} />
        <FilterSearch filter={filter} onFiltered={selectFilter} />
        <div className={styles.data_container}>
          {isPending && <p>Buscando Slides...</p>}
          {isError && <p>Erro: {error?.message || "Erro ao buscar slides"}</p>}
          {!isError && slides.length === 0 ? <p>Não ha slides cadastrados</p> : <SlideList slides={filteredData} />}
        </div>
      </section>
    </>
  );
}

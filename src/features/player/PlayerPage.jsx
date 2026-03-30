import useActiveSlide from "../slider/useAcitveSlides";
import Slider from "../slider/Slider";
import styles from "./PlayerPage.module.css";

export default function PlayerPage() {
  const { data, isPending, isError, error } = useActiveSlide();

  return (
    <section className={styles.container}>
      {isPending && <p style={{ textAlign: "center" }}>Buscando slides...</p>}
      {isError && <p>Error: {error.message || "Falha ao buscar slides"}</p>}
      {data.length > 0 && <Slider slides={data} />}
    </section>
  );
}

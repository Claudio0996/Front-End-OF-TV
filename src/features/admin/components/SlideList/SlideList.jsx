import SlideItem from "../SlideItem/SlideItem";

import styles from "./SlideList.module.css";

export default function SlideList({ slides }) {
  return (
    <ul className={styles.list_container}>
      {slides.map((item) => {
        return <SlideItem key={item._id} data={item} />;
      })}
    </ul>
  );
}

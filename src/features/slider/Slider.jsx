import { useState, useEffect } from "react";

import styles from "./Slider.module.css";

export default function Slider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const length = slides.length;

  useEffect(() => {
    if (slides.length === 0) {
      return;
    }
    const timer = setInterval(() => {
      setCurrentIndex((prevValue) => (prevValue + 1) % length);
    }, 15000);

    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) {
    return <p style={{ textAlign: "center" }}>Não há slides para mostrar no momento</p>;
  }

  const safeIndex = currentIndex % slides.length;

  let activeSlide = slides[safeIndex];

  if (activeSlide.mediaType === "video") {
    return (
      <video
        src={activeSlide.mediaUrl}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={styles.content}
      ></video>
    );
  } else {
    return <img src={activeSlide.mediaUrl} alt="Slide ativo" className={styles.content} />;
  }
}

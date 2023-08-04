import Slide from "../Slide/Slide";
import styles from "./Slider.module.css";

const Slider = ({ slides }: any) => {
  return (
    <div className={styles.slider}>
      {slides.map((slide: any) => {
        return (
          <Slide
            key={slide.title}
            title={slide.title}
            content={slide.content}
            imageName={slide.imageName}
          />
        );
      })}
    </div>
  );
};

export default Slider;

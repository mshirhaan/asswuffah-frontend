import { useEffect, useState } from "react";
import styles from "./CoursesSlider.module.css";
import Slider from "react-slick";

const CoursesSlider = ({ courses, className }: any) => {
  const [slidesToShow, setSlidesToShow] = useState(calculateSlidesToShow());

  function calculateSlidesToShow() {
    // Customize the number of slidesToShow based on the screen width
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      return 4;
    } else if (screenWidth >= 992) {
      return 3;
    } else if (screenWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  }

  function handleResize() {
    const slides = calculateSlidesToShow();
    if (slides !== slidesToShow) {
      setSlidesToShow(slides);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  const imagePath = "/images/";

  return (
    <div className={`${styles.container} ${className} `}>
      <Slider {...settings}>
        {courses.map((course: any) => {
          return (
            <div className={styles.slide}>
              <div
                className={styles.imageContainer}
                style={{
                  backgroundImage: `url(${imagePath + course.imageName})`,
                }}
              ></div>
              <h3>{course.title}</h3>
              <p>{course.content}</p>
              <a className={styles.btn} href="#">
                Learn More
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CoursesSlider;

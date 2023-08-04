import { useEffect, useRef, useState } from "react";
import styles from "./Courses.module.css";
import CoursesSlider from "./CoursesSlider/CoursesSlider";
import Slider from "./Slider/Slider";
import useSlideInAnimation from "../../hooks/useSlideInAnimation";

const Courses = () => {
  const containerRef = useRef(null);
  const isVisible = useSlideInAnimation(containerRef);

  const courseList = [
    {
      title: "Nurture",
      content: "A modern system of Islamic Madrasa for children",
      imageName: "nurture.jpeg",
    },
    {
      title: "Bloom",
      content: "2 years Diploma course for girls",
      imageName: "bloom.jpeg",
    },
    {
      title: "Sparkle",
      content: "3 years Shareeath course for girls",
      imageName: "sparkle.jpeg",
    },
    {
      title: "Thrive",
      content: "Advanced Islamic Learning for boys",
      imageName: "thrive.jpeg",
    },
    {
      title: "Empowher",
      content: "Weekend Diploma course for women",
      imageName: "empowher.jpeg",
    },
    {
      title: "Navigate",
      content: "Daily Islamic knowledge for youngsters",
      imageName: "navigate.jpeg",
    },
  ];
  return (
    <div className={`${styles.coursesContainer} `}>
      <div ref={containerRef} className={isVisible ? "slideInFromLeft" : ""}>
        <h2>OUR COURSES</h2>
        <p>
          As-Swuffah Foundation fosters an environment of intellectual
          exploration and spiritual growth, inviting seekers to immerse
          themselves in the richness of Islamic teachings, and thereby,
          nurturing a deeper connection with the divine and a broader
          appreciation of the world's spiritual heritage.
        </p>
      </div>

      {/* <Slider slides={courseList} /> */}
      <CoursesSlider
        className={isVisible ? "slideInFromLeft" : ""}
        courses={courseList}
      />
    </div>
  );
};

export default Courses;

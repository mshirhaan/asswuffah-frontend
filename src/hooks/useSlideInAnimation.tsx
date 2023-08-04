import React, { useState, useEffect } from "react";

const useSlideInAnimation = (elementRef: React.RefObject<HTMLElement>) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (
      elementRef.current &&
      !isVisible &&
      elementRef.current.offsetTop <= window.scrollY + window.innerHeight
    ) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isVisible;
};

export default useSlideInAnimation;

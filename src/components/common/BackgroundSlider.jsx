import React, { useState, useEffect } from "react";

const BackgroundSlider = ({ images, interval = 5000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Cycle to the next image in the array
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [images, interval]);

  const currentImage = images[currentImageIndex];

  const sliderStyle = {
    backgroundImage: `url(${currentImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    // height: "60vh", // Adjust as needed
    transition: "background-image 0.5s ease-in-out",
  };

  return <div className="px-auto h-[90vh] md:h-[65vh] text-center items-center justify-center" style={sliderStyle}></div>;
};

export default BackgroundSlider;

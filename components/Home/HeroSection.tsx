"use client";

import { useEffect, useState } from "react";

const images = [
  "https://mdabdulkaiyum.in/assets/files/images/carousel/gGS3XzzqNR3ySK6rx8SIF6I57vqDqO.jpg",
  "https://mdabdulkaiyum.in/assets/files/images/carousel/i8KLa25sRZCvTwGsttKX1vyFH3CHhu.jpg",
  "https://mdabdulkaiyum.in/assets/files/images/carousel/LjHOfj8Jnfs6y9BcCrvgulQk2fsEi9.jpg",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!Array.isArray(images) || length === 0) return null;

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden rounded-lg">
        {images.map((img, index) => (
          <div
            key={index}
            className={`transition-transform duration-700 ease-in-out ${
              index === current
                ? "translate-x-0"
                : "translate-x-full absolute top-0 left-0"
            }`}
          >
            {index === current && (
              <img
                src={img}
                alt={`slide ${index}`}
                className="w-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow hover:bg-opacity-100 transition"
        aria-label="Previous Slide"
      >
        &#8592;
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow hover:bg-opacity-100 transition"
        aria-label="Next Slide"
      >
        &#8594;
      </button>

      <div className="flex justify-center mt-3 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

"use client";
import React, { FC } from "react";
import Slider from "react-slick";
import Image from "next/image";

interface CarouselProps {
  slides: { id: number; image: string; title: string }[];
}

const Carousel: FC<CarouselProps> = ({ slides }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 240,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full  overflow-hidden cursor-grab">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.image}
            className="flex items-center justify-center pr-4"
          >
            <div className="relative w-full" style={{ paddingTop: "124.8%" }}>
              <Image
                src={slide.image}
                alt={slide.title}
                width={762}
                height={951}
                loading="lazy"
                layout="responsive"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

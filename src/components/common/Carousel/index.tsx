"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { product } from "@/data/data";

const slides = [
  {
    id: 1,
    image: "/img/jordan/green/jordan_green_1.jpg",
    title: "Slide 1",
    description: "Description 1",
  },
  {
    id: 2,
    image: "/img/jordan/green/jordan_green_2.jpg",
    title: "Slide 2",
    description: "Description 2",
  },
  {
    id: 3,
    image: "/img/jordan/green/jordan_green_3.jpg",
    title: "Slide 3",
    description: "Description 3",
  },
  {
    id: 4,
    image: "/img/jordan/green/jordan_green_4.jpg",
    title: "Slide 4",
    description: "Description 4",
  },
];

const Carousel = () => {
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

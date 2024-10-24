"use client";
import React, { FC } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  slides: { id: number; image: string; title: string }[];
}

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
    aria-label="Next slide"
  >
    <ChevronRight className="w-6 h-6 text-gray-700" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
    aria-label="Previous slide"
  >
    <ChevronLeft className="w-6 h-6 text-gray-700" />
  </button>
);

const Carousel: FC<CarouselProps> = ({ slides }) => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <div className="relative w-full overflow-hidden cursor-grab mb-[50px] px-0">
      <div className="mx-[-10px]">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.image} className="px-2">
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
    </div>
  );
};

export default Carousel;

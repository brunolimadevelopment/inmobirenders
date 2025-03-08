import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Carousel({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={2}
      slidesPerGroup={1}
      navigation
      pagination={{ clickable: true }}
      loop
      className="flex"
    >
      <style>
        {`
      .swiper-button-next, .swiper-button-prev {
        color: rgba(237, 237, 237, 0.9) !important;
      }
    `}
      </style>
      <SwiperSlide>
        <img
          src="src/images/comercialRenders1.webp"
          alt="Slide 1"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="src/images/comercialRenders2.webp"
          alt="Slide 2"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="src/images/comercialRenders3.webp"
          alt="Slide 3"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="src/images/comercialRenders4.webp"
          alt="Slide 4"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="src/images/comercialRenders5.webp"
          alt="Slide 5"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="src/images/comercialRenders6.webp"
          alt="Slide 6"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
}

// CAROUSEL PARA AS SEÇÕES "Renders Comerciales e Renders Exteriores"

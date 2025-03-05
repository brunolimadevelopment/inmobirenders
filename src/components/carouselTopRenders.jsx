import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={3}
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
          src="src/images/interior.png"
          alt="Slide 1"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="src/images/int-4.png"
          alt="Slide 2"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="src/images/int-6.png"
          alt="Slide 3"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="src/images/living.png"
          alt="Slide 4"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="src/images/cocina.png"
          alt="Slide 5"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
}

// CAROUSEL TOP RENDERS

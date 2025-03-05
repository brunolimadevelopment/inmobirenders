import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      speed={3000}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Navigation, Autoplay, EffectFade]}
      className="mySwiper"
    >
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

// CAROUSEL RENDERS

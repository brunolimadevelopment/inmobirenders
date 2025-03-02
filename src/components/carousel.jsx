import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      speed={1500}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, EffectFade]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="src/images/imovel-01.png" alt="Slide 1" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="src/images/imovel-02.jpg" alt="Slide 2" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="src/images/imovel-03.jpg" alt="Slide 3" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="src/images/imovel-04.jpg" alt="Slide 4" className="w-full h-full object-cover" />  
      </SwiperSlide>
    </Swiper>
  );
}

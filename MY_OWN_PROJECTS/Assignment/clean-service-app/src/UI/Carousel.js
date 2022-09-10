import "./Carousel.css";

import cleanContext from "../store/clean-context";

import { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
  const ctx = useContext(cleanContext);
  const { carouselImages } = ctx;
  return (
    <Swiper
      slidesPerView={9}
      spaceBetween={0}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={false}
      pagination={{
        clickable: false,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {carouselImages.map((image, idx) => {
        return (
          <SwiperSlide key={idx}>
            <img src={image} alt={`image-${idx}`} className="carousel-image" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./customSwiper.css"; // Import your custom CSS file

export function FullScreenCarousel({ projeto, onClose }) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between px-4 md:px-12 py-14 bg-black bg-opacity-80 fixed inset-0 z-50">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-xl font-bold text-white mx-auto text-center">
          {projeto.name}
        </h2>
        <button onClick={onClose} className="text-2xl text-white">
          X
        </button>
      </div>

      <div className="w-full h-[70vh]">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          className="w-full h-full"
        >
          {projeto.photos.map((photo, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={photo}
                alt={`Imagem ${index + 1} do ${projeto.name}`}
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom navigation buttons */}
        <div className="custom-swiper-button-next"></div>
        <div className="custom-swiper-button-prev"></div>
      </div>
      <h2 className="text-xl font-bold text-white mx-auto text-center">
        {projeto.desc}
      </h2>
    </div>
  );
}

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./customSwiper.css";
import { IoMdClose } from "react-icons/io";
import { ImageFullScreen } from "../ImageFullScreen";

export function FullScreenCarousel({ project, onClose }) {
  // Cria refs para o Swiper, título e descrição
  const swiperRef = useRef(null);
  const nameRef = useRef(null);
  const descRef = useRef(null);

  // Função para fechar o modal se clicar fora dos elementos específicos
  const handleClickOutside = (event) => {
    if (
      swiperRef.current &&
      !swiperRef.current.contains(event.target) &&
      nameRef.current &&
      !nameRef.current.contains(event.target) &&
      descRef.current &&
      !descRef.current.contains(event.target)
    ) {
      onClose();
    }
  };

  // Estado para exibir a imagem em tela cheia
  const [fullScreenImage, setFullScreenImage] = useState(null);

  return (
    <>
      <div
        onClick={handleClickOutside}
        className="w-full h-screen flex flex-col items-center justify-between px-4 md:px-12 py-4 md:py-14 bg-black bg-opacity-80 fixed inset-0 z-50"
      >
        <div className="w-full flex items-center justify-between">
          <h2
            ref={nameRef}
            className="text-xl font-bold text-white mx-auto text-center"
          >
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="text-2xl text-white transition-all duration-500 ease-in-out hover:scale-125"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Swiper com ref para detectar cliques */}
        <div ref={swiperRef} className="w-full h-[70vh]">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            className="w-full h-full"
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },
              640: {
                slidesPerView: 1.25,
              },
              768: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 1.75,
              },
              1280: {
                slidesPerView: 2,
              },
            }}
          >
            {project.files.map((photo, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <img
                  src={photo}
                  alt={`Imagem ${index + 1} do ${project.title}`}
                  className="w-full h-full object-cover rounded-2xl cursor-pointer"
                  onClick={() => setFullScreenImage(photo)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botões de navegação personalizados */}
          <div className="custom-swiper-button-next"></div>
          <div className="custom-swiper-button-prev"></div>
        </div>

        <h2
          ref={descRef}
          className="text-xl font-bold text-white mx-auto text-center"
        >
          {project.desc}
        </h2>
      </div>
      {/* Componente para abrir a imagem em tela cheia */}
      {fullScreenImage && (
        <ImageFullScreen
          image={fullScreenImage}
          onClose={() => setFullScreenImage(null)}
        />
      )}
    </>
  );
}

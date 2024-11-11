import { IoMdClose } from "react-icons/io";

export function ImageFullScreen({ image, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white text-3xl hover:scale-110 transition-transform"
        onClick={onClose}
      >
        <IoMdClose />
      </button>
      <img
        src={image}
        alt="Imagem em tela cheia"
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
}

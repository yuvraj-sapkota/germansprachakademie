import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <>
      <a
        href="https://wa.me/9811526003"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        {/* Outer pulse ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>

        {/* Main button */}
        <span className="relative flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg">
          <FaWhatsapp size={28} />
        </span>
      </a>
    </>
  );
};

export default WhatsAppFloat;

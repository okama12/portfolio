import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 bg-[#facc15] text-white p-4 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300"
    >
      <FaWhatsapp className="text-3xl text-green-500" /> 
    </a>
  );
};

export default WhatsAppButton;

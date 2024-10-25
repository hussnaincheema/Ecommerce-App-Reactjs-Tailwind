import React from "react";
import { FcApproval } from "react-icons/fc";

const EmailSent = ({ setIsModalOpen }) => {
  return (
    <div className="text-center">
      <FcApproval className="text-6xl mx-auto mb-4 text-salmonPink" />
      <p className="text-xl font-bold">Thank you for your message!</p>
      <p className="text-gray-700 mt-2">
        We have received your message and will get back to you as soon as
        possible.
      </p>
      <button
        onClick={() => setIsModalOpen(false)}
        className="bg-salmonPink mt-6 text-white py-2 px-6 rounded-md hover:bg-salmonPinkLight hover:text-black font-bold text-lg"
      >
        OK
      </button>
    </div>
  );
};

export default EmailSent;

import React from "react";

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  if (!isModalOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center z-50 py-10 px-4">
      <div className="bg-white rounded shadow-lg p-6 w-full md:w-1/2">
        <button
          className="absolute top-10 right-4 text-salmonPink text-5xl font-bold"
          onClick={() => setIsModalOpen(false)}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

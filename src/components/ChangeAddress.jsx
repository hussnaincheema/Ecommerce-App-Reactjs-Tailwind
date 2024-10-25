import React, { useState } from "react";

const ChangeAddress = ({ setIsModalOpen, setAddress }) => {
  const [newAddress, setNewAddress] = useState("");

  const onSave = () => {
    setAddress(newAddress);
    setIsModalOpen(false);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter new Address"
        className="border p-2 w-full mb-4 focus:outline-none focus:border-gray-600"
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          className="bg-salmonPink text-white py-2 px-4 rounded mr-2"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-salmonPink text-white py-2 px-4 rounded"
          onClick={onSave}
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;

"use client";

import { IconShoppingCart } from "@tabler/icons-react";
import React, { useState } from "react";
import ModalComponent from "./ModalComponent";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const ViewCartCompo = () => {
  const [modalOpen, setModalOpen] = useState(false); // State to manage the open/close status of the modal
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  ); // Retrieve the total quantity from the Redux store

  const closeModal = () => {
    setModalOpen(false); // Function to close the modal
  };

  return (
    <div className="fixed bottom-0 left-1/2 w-40 -translate-x-1/2 -translate-y-3 transform p-4">
      {!modalOpen && (
        <button
          onClick={() => setModalOpen(true)}
          className="relative left-0 w-full rounded-2xl bg-blue-600 py-2 text-xs font-medium text-white shadow-xl md:-left-10"
        >
          <div className="absolute -left-1 -top-1 h-4 w-4 rounded-full bg-red-500">
            {totalQuantity}{" "}
            {/* Display the total quantity inside a red circle */}
          </div>
          <div className="flex items-center justify-center gap-2">
            <IconShoppingCart style={{ padding: "3px" }} />{" "}
            <p className="">View Cart</p> {/* Text for the button */}
          </div>
        </button>
      )}
      {/* Modal Box */}
      {modalOpen && <ModalComponent closeModal={closeModal} />}{" "}
      {/* Render the modal component when modalOpen is true */}
    </div>
  );
};

export default ViewCartCompo;

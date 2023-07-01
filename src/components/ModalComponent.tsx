import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/feature/cart/cartSlice";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import PaidSuccess from "./PaidSuccess";

const ModalComponent = ({ closeModal }: { closeModal: () => void }) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItem); // Retrieve cart items from the Redux store
  const dispatch = useDispatch();
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  ); // Retrieve the total quantity from the Redux store
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice); // Retrieve the total price from the Redux store
  const [paid, setPaid] = useState(false); // State to manage the paid status

  const handlePaid = () => {
    setPaid(true); // Function to set the paid status to true
  };

  return (
    <div>
      <div className="fixed -left-28 -top-[650px] flex items-center justify-center md:-left-40">
        <div className="absolute inset-0 transition-opacity duration-300"></div>
        {!paid && (
          <div>
            <div className="relative z-10 h-[450px] w-[400px] -translate-y-8 overflow-scroll rounded-lg bg-white p-6 shadow-xl transition-transform duration-300">
              {cartItems.map((item) => {
                return (
                  <div key={item.id} className="grid grid-cols-12 gap-x-4 py-4">
                    <div className="col-span-3">
                      <Image
                        src={item.img}
                        width={70}
                        height={70}
                        alt={item.name}
                        className=""
                      />
                    </div>
                    <div className="col-span-6 flex flex-col justify-between">
                      <h2 className="text-md font-bold">{item.name}</h2>
                      <h2 className="text-xs">
                        $ {item.price}{" "}
                        <span className="text-gray-500">per card</span>
                      </h2>
                      <div>
                        <span className="text-red-500">{item.stock}</span>
                        <span className="text-xs text-gray-400">
                          {" "}
                          cards left
                        </span>
                      </div>
                    </div>
                    <div className="col-span-3 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-blue-600">
                          {item.quantity}
                        </p>
                        <div className="">
                          <ActionIcon
                            onClick={() => dispatch(increaseQuantity(item.id))} // Increase the quantity of the item
                            sx={{ flex: "none" }}
                          >
                            {item.stock <= 0 ? (
                              <p className="text-red-500">x</p>
                            ) : (
                              <IconChevronUp width="20px" />
                            )}
                          </ActionIcon>
                          <ActionIcon
                            onClick={() => dispatch(decreaseQuantity(item.id))} // Decrease the quantity of the item
                            sx={{ flex: "none" }}
                          >
                            {item.quantity > 1 ? (
                              <IconChevronDown width="20px" />
                            ) : (
                              <p className="text-red-500">x</p>
                            )}
                          </ActionIcon>
                        </div>
                      </div>
                      <p className="text-xs">price</p>
                      {/* Calculate the item's */}
                      <h4 className="truncate font-semibold text-blue-600">
                        ${item.quantity * item.price}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="absolute bottom-0 z-10 w-full translate-y-48 space-y-6 bg-white pb-8 pt-3 shadow-2xl">
              <button
                className="mx-auto w-full"
                onClick={() => dispatch(clearCart())} // Clear the cart when the button is clicked
              >
                <p className="text-center text-sm text-gray-500 underline">
                  Clear all
                </p>
              </button>
              <div>
                <div className="flex items-center justify-between px-20">
                  <h3 className="font-semibold">Total cards</h3>
                  {/* Display the total quantity */}
                  <h3 className="text-lg font-semibold text-red-500">
                    {totalQuantity}
                  </h3>
                </div>
                <div className="flex items-center justify-between px-20">
                  <h3 className="font-semibold">Total price</h3>
                  {/* Display the total price */}
                  <h3 className="w-3/5 truncate text-end text-lg font-semibold text-red-500">
                    $ {totalPrice}
                  </h3>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={handlePaid} // Set the paid status to true when the button is clicked
                  className="rounded-full bg-blue-400 px-12 py-4  text-white"
                >
                  Pay now
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Render the PaidSuccess component when paid is true */}
        {paid && <PaidSuccess />}
        <button
          className="absolute bottom-0 z-10 translate-y-52 rounded-md bg-red-600 px-4 py-2 text-white shadow-md"
          onClick={closeModal} // Call the closeModal function when the button is clicked
        >
          x
        </button>
      </div>
    </div>
  );
};

export default ModalComponent;

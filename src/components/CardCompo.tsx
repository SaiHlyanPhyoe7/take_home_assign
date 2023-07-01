import { addPokiData } from "@/redux/feature/pokimon/pokimonSlice";
import { RootState } from "@/redux/store";
import { Pokemon } from "@/type";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ViewCartCompo from "./ViewCartCompo";
import { addToCart } from "@/redux/feature/cart/cartSlice";

const CardCompo = ({ pokiValue }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPokiData(pokiValue));
  }, []);

  // Retrieve the list of pokemons from the Redux store
  const pokemons = useSelector((state: RootState) => state.pokimon.pokemons);

  // Track the selected cards and update the cart
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const handleCardSelect = (poki: Pokemon) => {
    const selectedId = poki.id;
    if (selectedCards.includes(selectedId)) {
      // Card is already selected, do nothing
    } else {
      setSelectedCards((prevSelectedCards) => [
        ...prevSelectedCards,
        selectedId,
      ]);
    }
    dispatch(addToCart(poki));
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-y-12">
        {/* Render each pokemon card */}
        {pokemons?.map((poki: Pokemon, index: number) => {
          const isSelected = selectedCards.includes(poki.id);
          return (
            <div
              key={index}
              className="col-span-12 mx-auto w-10/12 space-y-1 md:col-span-6 md:w-11/12 lg:col-span-4 xl:w-3/5"
            >
              <Suspense fallback={<div>Loading...</div>}>
                {/* Display the pokemon image */}
                <div className="flex justify-center">
                  <Image
                    className="translate-y-14"
                    alt={poki.name}
                    src={poki.img}
                    width={230}
                    height={230}
                  />
                </div>
              </Suspense>
              {/* Display pokemon details */}
              <div className="space-y-1 rounded-2xl bg-white pb-12 pt-16 shadow-md">
                <p className="text-center text-2xl font-bold">{poki.name}</p>
                <p className="text-center text-blue-500">
                  {poki.rarity ? poki.rarity : "rarity"}
                </p>
                <div className="flex items-center justify-around text-gray-500">
                  <p>${poki.price}</p>
                  <p>{poki.stock} left</p>
                </div>
              </div>
              {/* Button to select/unselect the card */}
              <div className="flex w-full justify-center">
                <button
                  onClick={() => handleCardSelect(poki)}
                  className={`mt-2 -translate-y-8 rounded-full ${
                    isSelected ? "bg-gray-950 text-white" : "bg-yellow-500"
                  } px-10 py-3`}
                >
                  Select card
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* Display the cart */}
      <ViewCartCompo />
    </div>
  );
};

export default CardCompo;

"use client";

import { addPokiData } from "@/redux/feature/pokimon/pokimonSlice";
import { RootState } from "@/redux/store";
import { Pokemon } from "@/type";
import Image from "next/image";
import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CardCompo = ({ pokiValue }: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPokiData(pokiValue));
  }, []);

  const pokemons = useSelector((state: RootState) => state.pokimon.pokemons);
  const handleCardSelect = (poki: Pokemon) => {
    console.log("Handle Card Select: ", poki);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-y-12">
        {pokemons?.map((poki: Pokemon, index: number) => {
          return (
            <div
              key={index}
              className="col-span-12 mx-auto w-10/12 space-y-1 md:col-span-6 lg:col-span-4 lg:w-3/5"
            >
              <Suspense fallback={<div>Loading...</div>}>
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

              <div className="flex w-full justify-center">
                <button
                  onClick={() => handleCardSelect(poki)}
                  className="mt-2 -translate-y-8 rounded-full bg-yellow-500 px-10 py-3"
                >
                  Select card
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardCompo;

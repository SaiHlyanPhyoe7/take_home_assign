"use client";

import {
  addPokiData,
  filterPokiData,
} from "@/redux/feature/pokimon/pokimonSlice";
import { RootState } from "@/redux/store";
import { fetchCards } from "@/utils/getData";
import { useDebouncedValue } from "@mantine/hooks";
import React, { ChangeEvent, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCompo from "./CardCompo";
import LoadMoreCompo from "./LoadMoreCompo";

const MainBodyCompo = ({ mainCompoPokiValue }: any) => {
  const [name, setName] = useState<string>("");
  const [debouncedName] = useDebouncedValue(name, 800);
  const [type, setType] = useState<string>("");
  const [rarity, setRarity] = useState<string>("");
  const [set, setSet] = useState<string>("");
  const [filterData, setFilterData] = useState([]);
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.pokimon.loadCount);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokiValue = await fetchCards(
          debouncedName,
          type,
          rarity,
          set,
          count
        );
        console.log("Poki Value is:", pokiValue);
        setFilterData(pokiValue);
        dispatch(addPokiData(pokiValue));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [debouncedName, type, rarity, set]);

  useEffect(() => {
    console.log("Filter Compo Use Effect");
    if (count !== 0) {
      dispatch(filterPokiData(filterData));
    }
  }, [filterData]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRarity("");
    setSet("");
    setType("");
    setName(e.target.value);
  };
  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setName("");
    setRarity("");
    setSet("");
    setType(e.target.value);
  };
  const handleRarityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setName("");
    setType("");
    setSet("");
    setRarity(e.target.value);
  };
  const handleSetChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setName("");
    setRarity("");
    setType("");
    setSet(e.target.value);
  };

  return (
    <div className="pt-16">
      {/* Handle Input */}
      <div className="my-12 flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-0">
        {/* Name Input */}
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name.."
          className="11/12 rounded-full border-y-0 border-l-0 border-r-2 px-4 py-2 text-center text-gray-400 shadow-sm outline-none lg:w-40 lg:rounded-l-3xl lg:rounded-r-none lg:text-start"
        />
        <div className="flex gap-4 lg:gap-0">
          {/* Select Type */}
          <select
            name="type"
            value={type}
            onChange={handleTypeChange}
            className="w-28 rounded-full border-r-2 bg-white px-4 py-2 text-center text-gray-400 shadow-sm lg:rounded-none lg:text-start"
          >
            <option value="" disabled hidden>
              Type
            </option>
            <option value="Metal">Metal</option>
            <option value="Fighting">Fighting</option>
            <option value="Psychic">Psychic</option>
          </select>

          {/* Select Rarity */}
          <select
            name="rarity"
            value={rarity}
            onChange={handleRarityChange}
            className="w-24 rounded-full border-r-2 bg-white px-4 py-2 text-center text-gray-400 shadow-sm  lg:rounded-none lg:text-start"
          >
            <option value="" disabled hidden>
              Rarity
            </option>
            <option value="common">Common</option>
            <option value="uncommon">Uncommon</option>
            <option value="rare">Rare</option>
          </select>

          {/* Select Set */}
          <select
            name="set"
            value={set}
            onChange={handleSetChange}
            className="w-24 rounded-full border-r-2 bg-white px-4 py-2 text-center text-gray-400 shadow-sm lg:rounded-none  lg:rounded-r-3xl lg:text-start"
          >
            <option value="" disabled hidden>
              Set
            </option>
            <option value="ru1">ru1</option>
            <option value="ecard2">ecard2</option>
            <option value="hgss4">hgss4</option>
          </select>
        </div>
      </div>

      {/* All Card are handle here */}
      <Suspense fallback={<div className="bg-green-300">Loading...</div>}>
        <CardCompo pokiValue={mainCompoPokiValue} />
      </Suspense>

      {/* Load Morebtn */}
      <Suspense fallback={<div className="bg-green-300">Loading...</div>}>
        <LoadMoreCompo
          debouncedName={debouncedName}
          type={type}
          rarity={rarity}
          set={set}
        />
      </Suspense>
    </div>
  );
};

export default MainBodyCompo;

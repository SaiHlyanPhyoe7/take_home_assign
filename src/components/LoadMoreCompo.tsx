import {
  addPokiData,
  incrementLoadCount,
} from "@/redux/feature/pokimon/pokimonSlice";
import { IconSearch } from "@tabler/icons-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loadMoreT } from "@/type";
import { fetchCards } from "@/utils/getData";

const LoadMoreCompo = ({ debouncedName, type, rarity, set }: loadMoreT) => {
  console.log("From Loadmore Component:", { debouncedName, type, rarity, set });
  const dispatch = useDispatch();
  const [localCount, setLocalCount] = useState<number>(2);

  const handleLoadMore = async () => {
    setLocalCount(localCount + 1);
    console.log("Local Count is : ", localCount);

    dispatch(incrementLoadCount());
    const pokiValue = await fetchCards(
      debouncedName,
      type,
      rarity,
      set,
      localCount
    );

    dispatch(addPokiData(pokiValue));
  };

  return (
    <div className="flex items-center justify-center gap-4 pb-12">
      <button
        onClick={handleLoadMore}
        className="flex items-center justify-center gap-2"
      >
        <IconSearch color="gray" />
        <p className="text-gray-500">Show More</p>
      </button>
    </div>
  );
};

export default LoadMoreCompo;

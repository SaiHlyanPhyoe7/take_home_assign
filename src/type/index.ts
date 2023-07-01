import { SetStateAction } from "react";
export interface Pokemon {
  id: string;
  img: string;
  name: string;
  rarity: string;
  price: number;
  stock: number;
}

export interface loadMoreT {
  debouncedName: string;
  type: string;
  rarity: string;
  set: string;
}

export interface childT {
  children: React.ReactNode;
}

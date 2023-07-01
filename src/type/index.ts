// type for pokemon item
export interface Pokemon {
  id: string;
  img: string;
  name: string;
  rarity: string;
  price: number;
  stock: number;
  quantity: number;
}

// type for filter data
export interface loadMoreT {
  debouncedName: string;
  type: string;
  rarity: string;
  set: string;
}

// type for wrap child
export interface childT {
  children: React.ReactNode;
}

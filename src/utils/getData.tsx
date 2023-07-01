import axios from "axios";

export async function getData(page: number) {
  const res = await axios
    .get(`https://api.pokemontcg.io/v2/cards?pageSize=12&page=${page}`)
    .then((res) => res.data);
  return res;
}

export const fetchCards = async (
  debouncedName: string,
  type: string,
  rarity: string,
  set: string,
  count: number
) => {
  const apiUrl = "https://api.pokemontcg.io/v2/cards";

  console.log("From ServerData:", {
    debouncedName,
    type,
    rarity,
    set,
  });

  const pageSize = 12;
  let queryParams = `pageSize=${pageSize}&page=${count}`;

  if (debouncedName) {
    queryParams += `&q=name:${debouncedName}`;
  } else if (type) {
    queryParams += `&q=types:${type}`;
  } else if (rarity) {
    queryParams += `&q=rarity:${rarity}`;
  } else if (set) {
    queryParams += `&q=set.id:${set}`;
  }

  const response = await axios.get(`${apiUrl}?${queryParams}`);
  const data = response?.data;

  const pokiValue = data?.data?.map((pokemon: any) => ({
    id: pokemon.id,
    img: pokemon.images.small,
    name: pokemon.name,
    rarity: pokemon.rarity,
    price: pokemon.cardmarket?.prices?.averageSellPrice || 0,
    stock: pokemon.set?.total,
  }));

  return pokiValue;
};

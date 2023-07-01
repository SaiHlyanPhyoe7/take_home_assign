import MainBodyCompo from "@/components/MainBodyCompo";
import NavbarCompo from "@/components/NavbarCompo";
import { getData } from "@/utils/getData";
import { Suspense, use } from "react";

export default function Home() {
  // get serverside data
  const serverData = use(getData(1));

  // add require value to the pokiValue
  const pokiValue = serverData?.data?.map((pokemon: any) => ({
    id: pokemon.id,
    img: pokemon.images.small,
    name: pokemon.name,
    rarity: pokemon.rarity,
    price: pokemon.cardmarket?.prices?.averageSellPrice || 0,
    stock: pokemon.set?.total,
    quantity: 1,
  }));

  return (
    <main className="min-h-screen bg-[#F8F8F8] pb-12">
      {/* Section For Navbar */}
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarCompo />
      </Suspense>

      {/* Mainbody for Search & Filter & Cards */}
      {/* Need to split as Components because of the Next Server Side App Directory */}
      <Suspense fallback={<div className="bg-red-400">Loading...</div>}>
        <MainBodyCompo mainCompoPokiValue={pokiValue} />
      </Suspense>
    </main>
  );
}

import MainBody from "@/components/MainBody";
import NavbarCompo from "@/components/NavbarCompo";
import { getData } from "@/utils/getData";
import { Suspense, use, useState } from "react";

export default function Home() {
  const serverData = use(getData(1));

  const pokiValue = serverData?.data?.map((pokemon: any) => ({
    id: pokemon.id,
    img: pokemon.images.small,
    name: pokemon.name,
    rarity: pokemon.rarity,
    price: pokemon.cardmarket?.prices?.averageSellPrice || 0,
    stock: pokemon.set?.total,
  }));

  return (
    <main className="min-h-screen bg-[#F8F8F8] pb-12">
      {/* Section For Navbar */}
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarCompo />
      </Suspense>

      {/* Mainbody for Search & Filter & Cards */}
      <Suspense fallback={<div className="bg-red-400">Loading...</div>}>
        <MainBody mainCompoPokiValue={pokiValue} />
      </Suspense>
    </main>
  );
}

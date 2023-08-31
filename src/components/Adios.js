import React from "react";
import { useAppContext } from "@/state/soupstate";
export default function Adios() {
  const soup = useAppContext();
  const inicio = () => {
    soup.updateUi(1);
    soup.resetPoints();
  };

  return (
    <div class="bg-gradient-to-b from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
      <div class="text-center text-white">
        <h1 class="text-4xl font-extrabold mb-4">Este es el Final del Viaje</h1>
        <p class="text-lg mb-6">
          Pero recuerda que siempre habrá más aventuras por descubrir.
        </p>
        <button
          onClick={inicio}
          class="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full text-lg transition duration-300 ease-in-out"
        >
          volver al inicio
        </button>
      </div>
    </div>
  );
}

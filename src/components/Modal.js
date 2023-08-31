import { useState } from "react";
import { useAppContext } from "@/state/soupstate";
import { BiSolidCoin } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";

export default function Modal({ ui }) {
  const soup = useAppContext();

  const nextLevel = () => {
    soup.updateUi(ui);
  };

  return (
    <>
      <div className="flex flex-col justify-center ">
        <div className="fixed inset-0 z-10 flex flex-col  items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-75">
          <div className="bg-white rounded-lg p-8">
            <h1 className="text-xl text-center font-semibold mb-4">
              FELICIDADES COMPLETASTE LA SOPA DEL NIVEL {soup.ui - 1}!!!
            </h1>
            <div className="flex items-center justify-center">
              Felicidades Ganaste +50 monedas{" "}
              <BiSolidCoin className="ml-2 text-2xl" />
            </div>
            <div className="flex items-center justify-center">
              tienes un total de {soup.points} monedas
              <BiSolidCoin className="ml-2 text-2xl" />
            </div>
            <button
              onClick={nextLevel}
              className="mt-4 bg-gray-500 hover:bg-gray-700 mx-auto text-white font-bold py-2 px-4 rounded flex items-center justify-center "
            >
              Siguiente Nivel <GoArrowRight className="text-2xl text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

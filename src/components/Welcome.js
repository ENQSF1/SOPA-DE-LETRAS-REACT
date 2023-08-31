import React from "react";
import { useAppContext } from "@/state/soupstate";

export default function Welcome() {
  const soup = useAppContext();

  const play = () => {
    soup.updateUi(2);
  };

  const go = () => {
    soup.resetUi();
  };

  return (
    <>
      <div className="bg-gradient-to-b from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-extrabold mb-4">
            ¡Bienvenido a Mi Juego de sopa de letras!
          </h1>
          <p className="text-lg mb-6">
            Explora un mundo emocionante y lleno de aventuras.
          </p>

          <div>
            {soup.prevUi !== 1 && soup.prevUi !== 6 ? (
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full text-lg transition duration-300 ease-in-out "
                onClick={go}
              >
                CONTINUAR CON EL JUEGO
              </button>
            ) : (
              <div>
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full text-lg transition duration-300 ease-in-out m-2"
                  onClick={play}
                >
                  INICIA EL JUEGO
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

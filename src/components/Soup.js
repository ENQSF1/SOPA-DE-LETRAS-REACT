import Matrix from "@/components/Matrix";
import { useState, useEffect } from "react";
import Modal from "@/components/Modal";
import confetti from "canvas-confetti";
import { useAppContext } from "@/state/soupstate";
import { BiSolidCoin } from "react-icons/bi";
import { GoArrowLeft } from "react-icons/go";
import { FiSearch } from "react-icons/fi";

export default function Soup({ level, ui, background, grid }) {
  const [counter, setCounter] = useState([]);
  const [modal, setModal] = useState(false);
  const [copyLevel, setCopyLevel] = useState(null);
  const soup = useAppContext();

  useEffect(() => {
    if (level !== null) {
      setCopyLevel(level);
    }
  }, [level]);

  const handleCounter = (id, isSelected) => {
    const estaEnCounter = counter.includes(id);

    if (isSelected === false && !estaEnCounter) {
      setCounter((prevCounter) => [...prevCounter, id]);
    }
    if (isSelected === true && estaEnCounter) {
      setCounter((prevCounter) => prevCounter.filter((item) => item !== id));
    }
  };

  useEffect(() => {
    if (copyLevel !== null) {
      const sortedCounter = [...counter].sort((a, b) => a - b);
      const string1 = sortedCounter.toString();
      const string2 = copyLevel.position.toString();
      if (string1 === string2) {
        confetti();
        confetti();
        confetti();
        setTimeout(() => {
          setModal(true);
          soup.updatePoints(50);
        }, 1000);
      }
    }
  }, [counter]);

  useEffect(() => {
    if (copyLevel) {
      const updatedObj = { ...copyLevel };
      updatedObj.words.forEach((word) => {
        const isWordComplete = word.answer.every((num) =>
          counter.includes(num)
        );

        if (isWordComplete) {
          word.strike = true;
        } else {
          word.strike = false;
        }
      });
      setCopyLevel(updatedObj);
    }
  }, [counter]);

  const inicio = () => {
    soup.updateUi(1);
    setCopyLevel(null);
  };

  const handleisSelected = (id, isSelected) => {
    const updatedObj = { ...copyLevel };
    const objetoEncontrado = updatedObj.puzzle.find(
      (objeto) => objeto.id === id
    );

    if (objetoEncontrado) {
      objetoEncontrado.isSelected = !isSelected;
    }

    setCopyLevel(updatedObj);
  };

  const showWord = () => {
    if (soup.points >= 20) {
      soup.updatePoints(-20);
      const updatedObj = { ...copyLevel };
      let primeraPalabraNoCumplida = false;

      updatedObj.words.forEach((word) => {
        if (!primeraPalabraNoCumplida) {
          const todosPresentes = word.answer.every((numero) =>
            counter.includes(numero)
          );

          if (!todosPresentes) {
            word.answer.forEach((id) => {
              const letra = updatedObj.puzzle.find((letra) => letra.id === id);
              if (letra) {
                letra.isSelected = true;
                handleCounter(letra.id, false);
                primeraPalabraNoCumplida = true;
              }
            });
          }
        }
      });
      setCopyLevel(updatedObj);
    }
  };

  return (
    <>
      <div>
        {level && (
          <>
            <div className="flex items-center justify-center bg-gray-800">
              <button
                className="bg-gradient-to-b from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white text-2xl font-semibold rounded-lg p-4 m-2 flex items-center space-x-2 hover:scale-105 transition-transform duration-300 mr-auto"
                onClick={inicio}
              >
                <GoArrowLeft className="text-4xl" />
                <span>REGRESAR AL INICIO</span>
              </button>

              <div class=" bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center rounded-lg shadow-lg text-2xl font-semibold  p-4 m-2 ">
                <>
                  <BiSolidCoin className="mr-2" />
                  {soup.points}
                </>
              </div>
            </div>

            <div className={background}>
              <div>
                {modal === true && <Modal ui={ui} />}

                {level != null && (
                  <>
                    <p className="text-2xl font-bold text-white m-2 p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg text-center">
                      NIVEL {soup.ui - 1}
                    </p>

                    <Matrix
                      object={level}
                      handleCounter={handleCounter}
                      handleisSelected={handleisSelected}
                      grid={grid}
                    />
                  </>
                )}
                <div
                  onClick={showWord}
                  className="text-2xl font-bold text-white m-2 p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg text-center flex items-center justify-center flex-col w-64 mx-auto"
                >
                  <FiSearch className="text-5xl mx-auto mb-4" />
                  <p className="text-xl font-bold flex items-center justify-center">
                    Usa la ayuda te costara 20 monedas
                  </p>
                  <BiSolidCoin className="ml-2 text-2xl " />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

import Matrix from "@/components/Matrix";
import { useState, useEffect } from "react";
import Modal from "@/components/Modal";
import confetti from "canvas-confetti"; // Corrige la importación aquí

export default function Soup({ level, send }) {
  const [counter, setCounter] = useState([]);
  const [modal, setModal] = useState(false);
  const [copyLevel, setCopyLevel] = useState(null);

  const gotonexlevel = () => {
    send("CONTINUE");
  };
  useEffect(() => {
    if (level !== null) {
      setCopyLevel(level);
    }
  }, [level]);

  const handleCounter = (id, isSelected) => {
    if (isSelected === false) {
      setCounter((prevCounter) => [...prevCounter, id]);
    }
    if (isSelected === true) {
      setCounter((prevCounter) => prevCounter.filter((item) => item !== id));
    }
  };

  useEffect(() => {
    const sortedCounter = [...counter].sort((a, b) => a - b);
    if (copyLevel !== null) {
      const string1 = sortedCounter.toString();
      const string2 = copyLevel.position.toString();
      {
        string1 === string2 ? (setModal(true), confetti()) : "";
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

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div>
          {modal === true && <Modal />}

          {level != null && (
            <>
              <Matrix object={level} handleCounter={handleCounter} />
            </>
          )}
        </div>
      </div>
      <button onClick={gotonexlevel}>pasar al siguiente nivel</button>
    </>
  );
}

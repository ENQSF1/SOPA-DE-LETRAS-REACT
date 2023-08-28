import React from "react";
import Box from "./Box";
import Listofwords from "./Listofwords";
export default function Matrix({ object, handleCounter, handlestrike }) {
  return (
    <>
      <div className=" justify-center flex border w-1/2 flex-wrap border-black rounded-lg m-2 mx-auto">
        {object.words.map((word, index) => (
          <Listofwords
            key={index}
            word={word.word}
            strike={word.strike}
            answer={word.answer}
            object={object}
            id={index + 1}
          />
        ))}
      </div>
      <div className="flex justify-center ">
        <div className="flex items-center justify-center border border-black rounded-lg">
          <div className={object.className}>
            {object.puzzle.map((letter, index) => (
              <Box
                key={index}
                letter={letter}
                handleCounter={handleCounter}
                id={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

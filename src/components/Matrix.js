import React from "react";
import Box from "./Box";
import Listofwords from "./Listofwords";
export default function Matrix({ object, handleCounter, handlestrike }) {
  return (
    <>
      <div className=" border-black rounded-lg m-2 mx-auto bg-white">
        <div className="bg-blue-600 rounded-tl-lg rounded-tr-lg text-white font-bold text-center p-2 ">
          ENCUENTRA LAS PALABRAS :
        </div>

        <div className=" justify-center flex  w-1/2  mx-auto">
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
      </div>
      <div className="flex justify-center ">
        <div className="flex items-center justify-center border border-black rounded-lg  bg-white">
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

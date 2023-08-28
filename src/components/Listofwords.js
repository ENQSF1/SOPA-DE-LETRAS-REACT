import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Listofwords({ word, strike }) {
  return (
    <>
      <div
        className={
          strike
            ? "m-2 p-2 border border-black rounded-lg text-xs line-through bg-green-200 flex items-center"
            : "m-2 p-2 border border-black rounded-lg text-xs  "
        }
      >
        {strike ? (
          <>
            <p>{word}</p> <AiOutlineCheckCircle className="text-black ml-2" />
          </>
        ) : (
          word
        )}
      </div>
    </>
  );
}

import React from "react";

export default function Welcome({ send }) {
  const start = () => {
    send("levelOne");
  };
  return (
    <div>
      <button onClick={start}>INICIA EL JUEGO</button>
    </div>
  );
}

import { useState } from "react";

export default function Box({ letter, id, handleCounter }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
    handleCounter(id, isSelected);
  };
  return (
    <div
      className={
        isSelected
          ? "bg-blue-400  w-8 h-8 rounded-full flex items-center justify-center"
          : "w-8 h-8 rounded-full flex items-center justify-center"
      }
      onClick={handleSelect}
    >
      {letter}
    </div>
  );
}

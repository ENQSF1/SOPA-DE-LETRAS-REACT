import { useState } from "react";

export default function Box({
  letter,
  id,
  handleCounter,
  isSelected,
  handleisSelected,
}) {
  const handleSelect = () => {
    handleisSelected(id, isSelected);
    handleCounter(id, isSelected);
  };
  return (
    <div
      className={
        isSelected
          ? "bg-blue-400  w-12 h-12 rounded-full flex items-center justify-center"
          : " w-12 h-12  rounded-full flex items-center justify-center"
      }
      onClick={handleSelect}
    >
      {letter}
    </div>
  );
}

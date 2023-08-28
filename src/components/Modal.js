import { useState } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-10 flex flex-col  items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-75">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl text-center font-semibold mb-4">
              FELICIDADES COMPLETASTE LA SOPA!!!
            </h2>
            <p className="text-center">SIGUIENTE NIVEL</p>

            <div className="flex justify-center items-center">
              <button
                onClick={closeModal}
                className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Cerrar Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

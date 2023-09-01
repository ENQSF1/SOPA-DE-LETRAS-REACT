import { createContext, useContext, useState } from "react";
const AppContext = createContext({
  points: 0,
  ui: 1,
  prevUi: 1,
  updatePoints: () => {},
  updateUi: () => {},
  resetUi: () => {},
  resetPoints: () => {},
});

export default function SoupContext({ children }) {
  const [points, setPoints] = useState(10);
  const [ui, setUi] = useState(1);
  const [prevUi, setPrevUi] = useState(1);

  function updatePoints(number) {
    setPoints(points + number);
  }

  function updateUi(number) {
    setPrevUi(ui);
    setUi(number);
  }

  function resetUi() {
    setUi(prevUi);
  }

  function resetPoints() {
    setPoints(0);
  }

  return (
    <AppContext.Provider
      value={{
        points,
        ui,
        prevUi,
        updatePoints,
        updateUi,
        resetUi,
        resetPoints,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

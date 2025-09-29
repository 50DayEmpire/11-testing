import { useState } from "react";

export const useCounter = () => {
  const [contador, setcontador] = useState(0);

  const handleCambio = (value) => {
    if (value === 0) {
      setcontador(0);
    } else {
      setcontador(contador + value);
    }
  };
  return { contador, handleCambio };
};

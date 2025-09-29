import { useCounter } from "../hooks/useCounter";
import ButtonCounter from "./ButtonCounter";

const Counter = () => {
  const { contador, handleCambio } = useCounter();

  return (
    <>
      <h2 role="counter">Counter: {contador}</h2>
      <ButtonCounter value={1} action={() => handleCambio(1)} />
      <ButtonCounter value={0} action={() => handleCambio(0)} />
      <ButtonCounter value={-1} action={() => handleCambio(-1)} />
    </>
  );
};

export default Counter;

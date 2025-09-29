const ButtonCounter = ({ value, action }) => {
  switch (value) {
    case 1:
      return <button onClick={action}>+1</button>;
    case 0:
      return <button onClick={action}>Reset</button>;
    case -1:
      return (
        <button aria-label="disminuir" onClick={action}>
          -1
        </button>
      );
    default:
      break;
  }
};

export default ButtonCounter;

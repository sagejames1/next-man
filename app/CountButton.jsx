import { useState, useEffect } from "react"

export default function CountButton({ incrementAmount, buttonColor }) {
  let [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + incrementAmount);
  }

  function rollOverCount() {
    if (count > 10) {
      setCount(0);
    }
  }

  useEffect(rollOverCount, [count]);

  const buttonStyle = {
    backgroundColor: buttonColor || "pink", 
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleClick}>
        +{incrementAmount}
      </button>
      <div>{count}</div>
    </div>
  );
}

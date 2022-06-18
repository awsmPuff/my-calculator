import React from "react";
import { useState } from "react";

function App() {

  const [display, setDisplay] = useState("0");

  const clear = () => {
    setDisplay("0");
  }

  const handleNumber = (e) => {
    const number = e.target.innerText;

    if(display === "0") {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  }

  const handleOperator = (e) => {
    const operator = e.target.innerText;

    setDisplay(display + " " + operator + " ");
  }

  const handleDecimal = () => {
    const arr = display.split(" ");
    const lastItem = arr[arr.length - 1];

    if(!lastItem.includes(".")) {
      setDisplay(display + ".");
    }
  }

  const calculate = () => {
    setDisplay(eval(display));
  }


  return (
    <div className="calculator">
      <div id="display">{display}</div>
      <button id="clear" className="big-w" onClick={clear}>AC</button>
      <button id="subtract" onClick={handleOperator}>-</button>
      <button id="seven" onClick={handleNumber}>7</button>
      <button id="eight" onClick={handleNumber}>8</button>
      <button id="nine" onClick={handleNumber}>9</button>
      <button id="multiply" onClick={handleOperator}>*</button>
      <button id="four" onClick={handleNumber}>4</button>
      <button id="five" onClick={handleNumber}>5</button>
      <button id="six" onClick={handleNumber}>6</button>
      <button id="divide" onClick={handleOperator}>/</button>
      <button id="one" onClick={handleNumber}>1</button>
      <button id="two" onClick={handleNumber}>2</button>
      <button id="three" onClick={handleNumber}>3</button>
      <button id="add" onClick={handleOperator}>+</button>
      <button id="zero" onClick={handleNumber}>0</button>
      <button id="decimal" onClick={handleDecimal}>.</button>
      <button id="equals" className="big-w" onClick={calculate}>=</button>
    </div>
  )
}

export default App;
import React, { useState } from "react";

function Calculator() {
  // Initialize state
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Function to handle button clicks
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Function to handle evaluation
  const handleEvaluate = () => {
    try {
      const evalResult = eval(input); // Using eval for simplicity, but be careful with untrusted input
      if (input === "") {
        setResult("Error");
      } else if (input.includes("/0")) {
        setResult("Infinity");
      } else if (input === "0/0") {
        setResult("NaN");
      } else {
        setResult(evalResult.toString());
      }
    } catch {
      setResult("Error");
    }
  };

  // Function to handle clearing the input
  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div>
      {/* Input field */}
      <input type="text" value={input} readOnly />
      <div>
        {/* Buttons */}
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
      <div>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>
      </div>
      <div>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
      {/* Result display */}
      <div>{result}</div>
    </div>
  );
}

export default Calculator;
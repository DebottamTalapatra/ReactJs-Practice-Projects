import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  function reset() {
    window.location.reload();
  }
  function isNumeric(str) {
    return !isNaN(Number(str));
  }
  function numValidator() {
    if (num1 == "" || num2 == "" || !isNumeric(num1) || !isNumeric(num2)) {
      reset();
      return false;
    }
    return true;
  }
  function addHandler() {
    if (numValidator()) {
      setResult((Number(num1) + Number(num2)).toString());
    } else {
      alert("Enter some valid numbers!");
    }
  }
  function subHandler() {
    if (numValidator()) {
      setResult((Number(num1) - Number(num2)).toString());
    } else {
      alert("Enter some valid numbers!");
    }
  }
  function mulHandler() {
    if (numValidator()) {
      setResult((Number(num1) * Number(num2)).toString());
    } else {
      alert("Enter some valid numbers!");
    }
  }
  function divHandler() {
    if (numValidator()) {
      if (Number(num2) === 0) {
        setResult("Division by zero not possible!");
        return;
      }
      setResult((Number(num1) / Number(num2)).toString());
    } else {
      alert("Enter some valid numbers!");
    }
  }

  return (
    <div className="container">
      <div className="main-area">
        <h1 className="title">ReactJs Calculator</h1>

        <form className="calculator-body">
          <label className="label">Enter first number</label>
          <input
            className="input-box"
            type="text"
            placeholder="eg.100"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />

          <label className="label">Enter second number</label>
          <input
            className="input-box"
            type="text"
            placeholder="eg.200"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </form>

        <div className="operations">
          <button className="op-btn" onClick={addHandler}>
            +
          </button>
          <button className="op-btn" onClick={subHandler}>
            -
          </button>
          <button className="op-btn" onClick={mulHandler}>
            ×
          </button>
          <button className="op-btn" onClick={divHandler}>
            ÷
          </button>
        </div>

        {result !== "" && <div className="answer">The answer is: {result}</div>}

        <div className="reset">
          <button className="reset-btn" onClick={reset}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

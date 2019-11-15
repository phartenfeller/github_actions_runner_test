import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const getResult = () => {
    let res = "";
    if (!input) {
      return;
    }

    if (input % 5 === 0) {
      res += "Fizz";
    }
    if (input % 7 === 0) {
      res += "Buzz";
    }
    if (!res) {
      res = input;
    }
    setResult(res);
  };

  return (
    <div className="App">
      <h1>FizzBuzz</h1>
      <div className="explain">
      <div>number divisible by <span className="explain-num">5</span>: Fizz</div>
      <div>number divisible by <span className="explain-num">7</span>: Buzz</div>
      <div>number divisible by <span className="explain-num">5 and 7</span>: FizzBuzz</div>
      </div>
      <input type="number" placeholder={5} onChange={e => setInput(e.target.value)} />
      <button onClick={() => getResult()}>show result</button>
      <div className="result-div">
        <span>Result:</span>
        <span className="result">{result}</span>
      </div>
    </div>
  );
};

export default App;

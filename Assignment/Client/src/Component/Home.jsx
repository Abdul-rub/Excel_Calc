import React from "react";
import { useState } from "react";
import "./home.css";
const Home = () => {
  const [input, setInput] = useState("");
  const [result, setresult] = useState("");

  const calculate = () => {
    fetch("http://localhost:8080/cal", {
      method: "POST",
      body: JSON.stringify({ input }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setresult(res));
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop:'10px' }}>Excel Calculator</h1>
      <div className="main_container">
        <div className="input_container">
          <label>Input : </label>
          <input type="text" onChange={(e) => setInput(e.target.value)} />
          <button onClick={() => calculate()}>Increment</button>
        </div>
        <br />
        <div className="output_container">
          <div>
            <p>Output: {result.output}</p>
          </div>
        </div>
        <br />
        <br />
        <div className="data_container">
          <div>
            <p>Original Formula: {result.input}</p>
          </div>
          <br />
          <div>
            <p>Incremented Formula: {result.output}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import { Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";

function App() {
  const [count, setCount] = useState(1);

  // Increment function
  const increment = () => setCount(count + 1);

  // useEffect runs after each render
  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Hello name="Zenji" />

        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
      </header>
    </div>
  );
}

export default App;

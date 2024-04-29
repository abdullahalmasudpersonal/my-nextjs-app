"use client";

import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
      <h1 className="text-center font-sans text-4xl">
        Welcome to next js Home Page
      </h1>
      <button className="border-4 btn btn-accent" onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
      <h1> {counter}</h1>
      <button className="border-4 btn btn-accent" onClick={() => setCounter(counter - 1)}>
        Decrease
    </button>
    </div>
    );
};

export default Counter;
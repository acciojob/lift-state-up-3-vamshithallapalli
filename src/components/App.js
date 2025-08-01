import React, { useState } from "react";
import "./../styles/App.css";
import Child1 from "./Child1";
import Child2 from "./Child2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div style={{ backgroundColor: "green", padding: "10px" }}>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      <Child1 setSelectedOption={setSelectedOption} />
      <Child2 setSelectedOption={setSelectedOption} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default App;

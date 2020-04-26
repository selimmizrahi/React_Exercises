import React from "react";
import logo from "./logo.svg";
import Box1 from "./Day1/Box1";
import ChildrenBox from "./Day1/Box2";
import "./Day1/boxes.css";
// import "./Day1/Boxes.css";

function App() {
  return (
    <div className="App">
      <Box1>
        {" "}
        <ChildrenBox>
          <ChildrenBox class="Box3">
            <ChildrenBox class="Box4"></ChildrenBox>
            <ChildrenBox class="Box4"></ChildrenBox>
          </ChildrenBox>
        </ChildrenBox>
      </Box1>
    </div>
  );
}

export default App;

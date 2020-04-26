import React from "react";
import logo from "./logo.svg";
import "./Day1/App.css";
import Travel from "./Day1/travelSpots";
import istanbul from "./Day1/istanbul.jpg";
import munich from "./Day1/munich.jpg";
import underberg from "./Day1/underberg.jpg";

function App() {
  return (
    <div>
      <ul className="users-list">
        <Travel
          name={"Istanbul"}
          image={istanbul}
          location={
            "https://www.google.com/maps/d/u/0/viewer?hl=en&gl=us&ie=UTF8&oe=UTF8&msa=0&mid=1WsyWF3CXrR3xNpUGZz2IFSg65KM&ll=0%2C0&z=14"
          }
        ></Travel>
        <Travel
          name={"Munich"}
          image={munich}
          location={
            "https://www.google.com/maps/d/u/0/viewer?hl=en&gl=us&ie=UTF8&oe=UTF8&msa=0&mid=1WsyWF3CXrR3xNpUGZz2IFSg65KM&ll=0%2C0&z=14"
          }
        ></Travel>
        <Travel
          name={"Underberg"}
          image={underberg}
          location={
            "https://www.google.com/maps/d/u/0/viewer?hl=en&gl=us&ie=UTF8&oe=UTF8&msa=0&mid=1WsyWF3CXrR3xNpUGZz2IFSg65KM&ll=0%2C0&z=14"
          }
        >
          >
        </Travel>
      </ul>
    </div>
  );
}

export default App;

// Exercise 1

// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Itc React App</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Click Me
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./Day1/App.css";
import Navigation from "./Day1/navigation";
import ServiceContent from "./Day1/Body";
import ImageContent from "./Day1/Body2";
import user from "./Day1/user.svg";
import survey from "./Day1/survey.svg";
import email from "./Day1/email.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
        <ServiceContent title="SERVICE"></ServiceContent>
        <div className="Middlepart">
          <ImageContent
            image={user}
            subtitle="USERS INTERFACE DESIGN"
            info="Wireframing Prototyping Userbility Testing"
          ></ImageContent>
          <ImageContent
            image={survey}
            subtitle="CONCEPT AND IDEAS"
            info="Conceptulization Digital branding Product Stratergy"
          ></ImageContent>
          <ImageContent
            image={email}
            subtitle="DESIGN AND BRANDING"
            info="Interaction Design Grafic Design Identity Design"
          ></ImageContent>
        </div>
      </header>
    </div>
  );
}
export default App;

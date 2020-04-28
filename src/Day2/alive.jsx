import React from "react";
import Checkbox from "./checkbox";

class Alive extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  componentDidMount() {
    alert("I am alive");
  }

  render() {
    return <h1> Congrats for clicking the box! </h1>;
  }
}

export default Alive;

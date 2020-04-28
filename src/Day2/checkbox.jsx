import React from "react";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checked: false};
  }

  saveCheckbox(event) {
    this.setState({ checked: event });
  }

  render() {
    return (
      <div>
        <input
          type="Checkbox"
          onClick={(event) => {
            this.saveCheckbox(event.target.checked);
          }}
        ></input>
        <label> Check the box and see what happens </label>
        {this.state.checked && this.props.children}
      </div>
    );
  }
}

export default Checkbox;

import React from "react";
import Form from "./myForm";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChat: [],
    };
  }

  thisData = (event) => {
    this.setState({ ...event });
  };

  render() {
    return (
      <>
        <Form messageInput={this.thisData} />
        {this.state.showChat.map((li) => {
          return (
            <div className="chatText" key={li}>
              {li}
            </div>
          );
        })}
      </>
    );
  }
}

export default Chat;

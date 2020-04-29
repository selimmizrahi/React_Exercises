import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: " ",
      showChat: [],
    };
  }

  changeThis = (event) => {
    this.setState({ chat: event.target.value });
  };

  submitThis = (event) => {
    event.preventDefault();
    let showChat = this.state.showChat;
    let chat = this.state.chat;
    showChat.push(chat);
    this.setState({ showChat: showChat });
    this.setState({ chat: " " });
    this.props.messageInput(this.state);
  };

  render() {
    return (
      <div className="chat-Box">
        <form onSubmit={this.submitThis}>
          <input
            type="text"
            className="chat-bar"
            placeholder="Chat..."
            value={this.state.chat}
            onChange={this.changeThis}
          />
        </form>
      </div>
    );
  }
}

export default Form;

import React, { Component } from "react";
import {
  ChatkitProvider,
  TokenProvider,
  withChatkit
} from "@pusher/chatkit-client-react";

import "../game.css";

const instanceLocator = "v1:us1:a5c46f09-c95f-4317-b5bf-6542380cfddb";
const userId = "test1";

const tokenProvider = new TokenProvider({
  url:
    "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a5c46f09-c95f-4317-b5bf-6542380cfddb/token"
});

const WelcomeMessage = withChatkit(props => {
  return (
    <div>
      {props.chatkit.isLoading
        ? "Connecting to Chatkit..."
        : `Hello ${props.chatkit.currentUser.name}!`}
    </div>
  );
});

export default class Chatbox extends Component {
  state = {
    message: "",
    chat: []
  };

  handleChange = e => {
    this.setState({
      ...this.state.message,
      [e.target.name]: e.target.value
    });
  };

  handleChat = e => {
    e.preventDefault();
    this.setState({
      chat: [...this.state.chat, this.state.message]
    });
  };

  render() {
    // console.log(this.state.message)
    // console.log(this.state.chat)
    return (
      <div>
        <ChatkitProvider
          instanceLocator={instanceLocator}
          tokenProvider={tokenProvider}
          userId={userId}
        >
          <WelcomeMessage />
          <div className="sendchat" onSubmit={this.handleChat}>
            <input
              type="text"
              placeholder="type message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <button type="submit">send</button>
          </div>
          <form></form>
        </ChatkitProvider>
      </div>
    );
  }
}

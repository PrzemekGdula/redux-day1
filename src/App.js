import React from 'react';

import { store } from './store'
import { sendActionCreator } from './state/messages'

class App extends React.Component {
  state = {
    messages: []
  }

  prepareMessage = () => {
    const receiver = prompt('Wpisz odbiorce')
    const text = prompt('Wpisz tekst wiadomosci')

    const message = sendActionCreator(receiver, text)

    this.setState({
      messages: this.state.messages.concat(message)
    })
  }

  sendMessages = () => {
    this.state.messages.forEach(
      message => store.dispatch(message)
    )
    this.setState({ messages: [] })
  }


  render() {
    return (
      <div>
        <button
          onClick={this.prepareMessage}
        >
          PREPARE MESSAGE
        </button>
        <button
          onClick={this.sendMessages}
        >
          SEND MESSAGE
        </button>

        <div>
          {
            this.state.messages.map(
              (message, i) => (
                <div
                  key={i + message.text}
                >
                  {message.receiver} | {message.text}
                </div>
              )
            )
          }


        </div>
      </div>
    )
  }
}


export default App


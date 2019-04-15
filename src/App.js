import React from 'react';

import { sendMessage } from './store'

class App extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={() => sendMessage(
            prompt(),
            prompt()
          )}
        >
          SEND MESSAGE
        </button>
      </div>
    )
  }
}


export default App


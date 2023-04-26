/* eslint-disable */
import './App.css';
import React from 'react';
import Calculator from './components/Calculator';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-body" id="App-body">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
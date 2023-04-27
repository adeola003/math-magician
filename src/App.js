/* eslint-disable */
import './App.css';
import React from 'react';
import Calculator from './components/Calculator';
import QuoteComponent from './components/Quote';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-body" id="App-body">
          <QuoteComponent />
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
/* eslint-disable */
import './App.css';
import React from 'react';
import Calculator from './components/Calculator';
import QuoteComponent from './components/Quote';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-body" id="App-body">
          <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/quote' element={<QuoteComponent />} />
          </Routes>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
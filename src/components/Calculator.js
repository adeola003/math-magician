/* eslint-disable linebreak-style */
import React from 'react';

const Calculator = () => (
  <div className="calculator">
    <div className="display">0</div>
    <div className="button-row">
      <button className="button button-light" type="button">C</button>
      <button className="button button-light" type="button">DEL</button>
      <button className="button button-light" type="button">&divide;</button>
    </div>
    <div className="button-row">
      <button className="button" type="button">7</button>
      <button className="button" type="button">8</button>
      <button className="button" type="button">9</button>
      <button className="button button-light" type="button">&times;</button>
    </div>
    <div className="button-row">
      <button className="button" type="button">4</button>
      <button className="button" type="button">5</button>
      <button className="button" type="button">6</button>
      <button className="button button-light" type="button">-</button>
    </div>
    <div className="button-row">
      <button className="button" type="button">1</button>
      <button className="button" type="button">2</button>
      <button className="button" type="button">3</button>
      <button className="button button-light" type="button">+</button>
    </div>
    <div className="button-row">
      <button className="button button-zero" type="button">0</button>
      <button className="button" type="button">.</button>
      <button className="button button-light" type="button">=</button>
    </div>
  </div>
);

export default Calculator;

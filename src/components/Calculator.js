/* eslint-disable linebreak-style */
import React from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
    
    const [state, addNewState] = useState({
        total: null,
        next: null,
        operation: null,
      });

      const operation = (e) => {
        const newState = calculate(state, e.target.textContent);
        addNewState(newState)
      };


    return (
        <div className="calculator">
    <div className="display">0</div>
    <div className="button-row">
      <button className="button button-light" type="button" onClick={operation}>AC</button>
      <button className="button button-light" type="button" onClick={operation}>+/-</button>
      <button className="button button-light" type="button" onClick={operation}>%</button>
      <button className="button button-light" type="button" onClick={operation}>&divide;</button>
    </div>
    <div className="button-row">
      <button className="button" type="button" onClick={operation}>7</button>
      <button className="button" type="button" onClick={operation}>8</button>
      <button className="button" type="button" onClick={operation}>9</button>
      <button className="button button-light" type="button" onClick={operation}>&times;</button>
    </div>
    <div className="button-row">
      <button className="button" type="button" onClick={operation}>4</button>
      <button className="button" type="button" onClick={operation}>5</button>
      <button className="button" type="button" onClick={operation}>6</button>
      <button className="button button-light" type="button" onClick={operation}>-</button>
    </div>
    <div className="button-row">
      <button className="button" type="button" onClick={operation}>1</button>
      <button className="button" type="button" onClick={operation}>2</button>
      <button className="button" type="button" onClick={operation}>3</button>
      <button className="button button-light" type="button" onClick={operation}>+</button>
    </div>
    <div className="button-row">
      <button className="button button-zero" type="button" onClick={operation}>0</button>
      <button className="button" type="button" onClick={operation}>.</button>
      <button className="button button-light" type="button" onClick={operation}>=</button>
    </div>
  </div>
    )
  
    
};

export default Calculator;

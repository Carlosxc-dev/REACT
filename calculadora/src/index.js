import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculadora from './main/calculator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( 
  <>
    <h1>Calculator</h1>
    <Calculadora/>
  </>
, document.getElementById("root")
)

reportWebVitals();

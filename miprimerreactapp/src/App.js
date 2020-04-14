import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Saludo from './Saludo';
import Despedida from './Despedida';
import Contador from './Contador';

function App() {
  const word = "Sale chido bye";
  const wordTwo = "Hola buenas que tal!!";

  return (
    <div className="App">
      <Saludo texto={wordTwo} />
      <Despedida palabra={word} />
      <Contador />
    </div>
  );
}

export default App;

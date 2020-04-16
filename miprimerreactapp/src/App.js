import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Saludo from './Saludo';
import Despedida from './Despedida';
import Contador from './Contador';
import Card from './Card';
import axios from 'axios';
import Formulario from './Formulario';

function App() {
  const word = "Sale chido bye";
  const wordTwo = "Hola buenas que tal!!";

  const [authors, setAuthors] = useState([]);

  const objetos = [
    {id: 1, fruta:'Pera'},
    {id: 2, fruta:'Plantano'},
    {id: 3, fruta:'Fresa'},
    {id: 4, fruta:'Durzno'},
    {id: 5, fruta:'Sandia'},
    {id: 6, fruta:'Limon'},
    {id: 7, fruta:'Mango'},
    {id: 8, fruta:'Uva'},
    {id: 9, fruta:'Zapote'},
  ];

  // const cards = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />];

  // const cards = objetos.map((objFruta) => {
  //   return <Card nombreFurta={objFruta.fruta} />
  // });


  useEffect(() => {
    axios.get('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/')
      .then((result) => { 
        console.log(result.data);
        setAuthors(result.data)
      }).catch((err) => {
        console.log(err);    
      });
  }, []);
  
  const render = () => {
    if (authors.length === 0){
      return <h1>Cargando...</h1>
    } else {
      const listCardAuthors = authors.map((author) => {
        return <Card nombre={author.name}/>
      });
      return listCardAuthors
    }
  }

  return (
    <div className="App row">
      {/* <Saludo texto={wordTwo} />
      <Despedida palabra={word} />
      <Contador /> */}
      <Formulario />
      {render()}
    </div>
  );
}

export default App;

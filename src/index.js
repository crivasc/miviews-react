import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.scss';

const Componente=({titulo,children})=>{ //"da opcion: pasar el contenido destructurado"
  //Creamos las 2 contantes (en js moderno)
  //const {titulo,contenido} = props;

  return(
    <div>
      <h1>{titulo}</h1>
      <div>{children}</div>
    </div>
  )
}

ReactDOM.render(
  /*<Componente titulo='React Muvis' contenido='Sinopsis chingonas'/>
  <Componente titulo='React Muvis'>Hola desde Children</Componente>,*/
  <App/>,
  document.getElementById('root')
);


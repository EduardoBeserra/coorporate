import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import ChooseSimples from "./componentes/choose-select/chooseSelect";
import * as serviceWorker from './serviceWorker';

const URL = 'http://10.150.61.20:8080/IntegradorProgress/rest/restful/cademp'
    + '?where=cademp.empresa = 1 and cademp.unidade > 0&campos=cademp.unidade,cademp.sigla'
    + '&configBD=BDDesenv.properties'

const lista = [
    {id: "teste1", descricao: "teste1"},
    {id: "teste2", descricao: "teste2"},
]
ReactDOM.render(
    <div className="container">
        <ChooseSimples url={URL} id='cademp_unidade' descricao='cademp_sigla'/>
        <ChooseSimples lista={lista} id='id' descricao='descricao'/>
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

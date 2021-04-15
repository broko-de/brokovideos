import React from 'react';
//Importo Componentes
import Header from '../components/Header';

//Importo CSS - Con extensión
import '../assets/styles/App.scss';

/*
    La componente app nos va a servir para contener nuestros componentes y estructurarlos de una mejor forma
*/
const App = () =>(
    <div className="App">
        <Header />
    </div>
)

export default App;
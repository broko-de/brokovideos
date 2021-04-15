import React from 'react';
//Importo Componentes
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

//Importo CSS - Con extensión
import '../assets/styles/App.scss';

/*
    La componente app nos va a servir para contener nuestros componentes y estructurarlos de una mejor forma
*/
const App = () =>(
    <div className="App">
        <Header />
        <Search />
        <Categories >
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />                
            </Carousel>
        </Categories>
        <Footer />
    </div>
)

export default App;
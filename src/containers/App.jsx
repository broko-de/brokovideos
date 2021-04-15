import React, { useState, useEffect } from 'react';
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
const App = () => {

    /* 
        Inicializamos el state de nuestra app
        params: videos: el nombre de la variable para guadar el estado
        params: setVideos: la funcion que permite actualizar el estado, en este caso los videos
        useState: recibe como parametro lo que vamos utilizar para inicializar el estado, en este caso un array vacio
    */
    const [ videos , setVideos ] = useState([])

    /*
        Permite ir a la API para obtener los datos para pasarse a la funcion setVideo que se encarga de actualizar el estado de la APP
        useEffect recibe una funcion anonima y un segundo parametro que se encarga de escuchar alguna propiedad que pueda cambiar y asi pueda volver
        a ejecutarse. Si no se le asigna ningun valor se produce un Loop. Si le pasamos un array vacio solo se llama la primera vez
    */  
    useEffect(()=>{
        fetch("http://localhost:3000/initalState")
            .then(response => response.json()) // cuando la API obtenga la respuesta lo transformo en formato JSON
            .then(data => setVideos(data)); // posteriormente a envio la información seteada en json a la fn setVideos para que actualice el estado
    }, []);


    console.log(videos);
    
    return (
    <div className="App">
        <Header />
        <Search />
        <Categories title="Mi lista">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />                
            </Carousel>
        </Categories>
        
        <Categories title="Tendencias">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />                
            </Carousel>
        </Categories>

        <Categories title="Originales de BrokoVideos">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />                
            </Carousel>
        </Categories>

        <Footer />
    </div>
    )
}

export default App;
import {useState, useEffect } from 'react'

/*
    Custom hook para inicializar nuestra app
    Params: API: url con la que se conectará para obtener los videos
*/
const useInitialState = (API) => {

    /* 
        Inicializamos el state de nuestra app
        params: videos: el nombre de la variable para guadar el estado
        params: setVideos: la funcion que permite actualizar el estado, en este caso los videos
        useState: recibe como parametro lo que vamos utilizar para inicializar el estado, en este caso un array vacio
    */
    const [ videos , setVideos ] = useState({ mylist: [], trends: [], originals: [] })
    
    useEffect(()=>{
        fetch(API)
            .then(response => response.json()) // cuando la API obtenga la respuesta lo transformo en formato JSON
            .then(data => setVideos(data)); // posteriormente a envio la información seteada en json a la fn setVideos para que actualice el estado
    }, []);
    return videos; //retorno el estado que tengo
}

export default useInitialState;

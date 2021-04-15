import React, { Children } from 'react'
import '../assets/styles/components/Categories.scss';

//children puede ser un componente o serie de componentes que los pasamos sin llamarlo desde propo si no que dede la asignación de la funcion
// title lo pasamos por nuestras props para ingresar un titulo como parametro
const Categories = ({children, title}) => (
    <div className="categories">
        <h3 className="categories__title">{title}</h3>
        {children}
    </div>
    
);

export default Categories;
import React, { Children } from 'react'
import '../assets/styles/components/Categories.scss';

//children puede ser un componente o serie de componentes que los pasamos sin llamarlo desde propo si no que dede la asignación de la funcion
const Categories = ({children}) => (
    <div className="categories">
        <h3 className="categories__title">Mi lista</h3>
        {children}
    </div>
    
);

export default Categories;
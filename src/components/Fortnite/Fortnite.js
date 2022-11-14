import React from 'react';
import './hojas_de_estilo/Fortnite.css';

function Fortnite(props){
  return(

    <div className='container'>
      <div>
        <img
        className='foto-perfil'
        src={props.imagen}
        />
        <p>{props.nombre}</p>
      </div>
      <div>
        <a href={`${props.linkedin}`}><img src={require("./imagenes/icono-linkedin.png")}
           alt=""/></a>
        <a href={`${props.github}`}><img src={require("./imagenes/icono-github.png")}
           alt=""/></a>
      </div>
    </div>






    // <div className='contenedor-nosotros'>
    //    <img className='imagen-nosotros'
    //   src={props.imagen}
    //   alt={`Foto de ¡${props.imagen}!`}/> 
    //   <div className='contenedor-texto-nosotros'>
    //     <p className='nombre-nosotros'>
    //       <strong>{props.nombre}</strong> en {props.pais}</p>
    //     <p className='cargo-nosotros'>
    //       <strong>{props.cargo}</strong></p>
    //     <div className='iconos-nosotros'>
    //       <a href={`${props.github}`}><img src={require("./imagenes/icono-github.png")}
    //       alt=""/></a>
    //       <a href={`${props.linkedin}`}><img src={require("./imagenes/icono-linkedin.png")}
    //       alt=""/></a>
    //     </div>       
    //   </div>
    // </div>
  ); 
}

export {Fortnite};
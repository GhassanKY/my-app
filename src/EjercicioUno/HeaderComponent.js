import React from 'react'
import './EjercicioUno.css'


export const HeaderComponent = (props) => {

  
  return (
    <div>
      <a href='https://www.danydelvalle.com/wp-content/uploads/2018/09/portada-de-servicios0.jpg'><img className='imagenHeader' src="https://www.danydelvalle.com/wp-content/uploads/2018/09/portada-de-servicios0.jpg" alt="Header" /></a>
      <h1> {props.title} </h1>
    </div>
  )
}


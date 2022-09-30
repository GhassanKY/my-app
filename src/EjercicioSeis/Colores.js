import React, {useState} from 'react'
import './Colores.css'

export const Colores = () => {

    const [first, setfirst] = useState("cuadro")

  return (
    <div className='d-flex flex-column justify-content-center align-items-center m-3'>
        <hr></hr>

        
        <h1>Circulo (Onclick) cambia color</h1>
        

        <div onClick={()=>setfirst("cuadroRojo")} className={first} ></div>
        <button className='btn btn-primary m-2 w-25' onClick={()=>setfirst("cuadro")}>Reset</button>

    </div>
  )
}

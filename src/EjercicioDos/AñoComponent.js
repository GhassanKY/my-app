import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export const AñoComponent = () => {


    var currentTime = new Date();
    const fecha = currentTime.getFullYear();


    const [contador, stateContador] = useState(fecha);

    


    return (
        <div>

            <hr></hr>

            <h1>Año Autoincrementable</h1>
            <h2>{contador}</h2>

            <div>
                <button className='btn btn-primary m-5 rounded-pill' onClick={() => stateContador(contador + 1)} >+</button>
                <button className='btn btn-primary m-5 rounded-pill' onClick={() => stateContador(fecha)} >Reset</button>
                <button className='btn btn-primary m-5 rounded-pill' onClick={() => stateContador(contador - 1)} >-</button>
            </div>



            <form onSubmit={ev => {ev.preventDefault();
                 stateContador(Number(ev.target.año.value))} } >

                <div className='d-flex flex-column align-items-center justify-content-center m-5'>
                    <label className='label-form-control' htmlFor="año">Agrega un nuevo año</label>
                    <input type='number' className='form-control w-25 m-1' name='año' id='año'></input>
                    <button className='btn btn-success m-2'>Agregar</button>
                </div>
            </form>


        </div>
    )
}


import React, {useState} from 'react'


export const SumaMultiplicacion = (props) => {
    
     const [first, setfirst] = useState("");
     const [second, setsecond] = useState("");

     const [Resultado, setResultado] = useState("");

     const onclickHandler = () =>{
       setResultado(props.multiplicacion(first, second)) 
    
     }


    return (
        <div>
            <hr></hr>
            <h1> {Resultado} </h1>
            <form className='d-flex justify-content-center flex-column align-items-center m-5' onSubmit={ev => {ev.preventDefault()} }>

                <input 
                name='valor1' 
                className="form-control w-25 m-1" 
                placeholder="Primer Valor"
                value={first}
                onChange={(e) => setfirst(Number((e.target.value))) }
                />

                <input 
                name='valor2' 
                className="form-control w-25 m-1" 
                placeholder="Segundo Valor"
                value={second}
                onChange={(e) => setsecond(Number((e.target.value)))}
                />

                <button className='btn btn-primary m-1 w-25' onClick={onclickHandler}>Multiplicar</button>
                <button className='btn btn-primary m-1 w-25' onClick={() => setResultado(first + second)} >Sumar</button>
                <button className='btn btn-primary m-1 w-25' onClick={() => setResultado(0)} >Resetear</button>
                
            </form>



        </div>
    )
}

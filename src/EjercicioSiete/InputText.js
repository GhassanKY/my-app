import React, {useState} from 'react'
import { useForm } from '../Hooks/useForm'

const initialForm = {}

const validationsForm = (form) => {

}

export const InputText = () => {

  const {  form, errors, handleChange, handleBlur } 
  = useForm(initialForm, validationsForm)


  return (
    <div className='m-5'>
        <hr></hr>
        <h1>Validacion de Min/Max</h1>

        <form onSubmit={ev => {ev.preventDefault()} }>

        <input onChange={handleChange} className='form-control' placeholder='Ingresa un valor'></input>

        </form>
    </div>
  )
}

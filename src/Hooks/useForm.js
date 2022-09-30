import React, {useState} from 'react'

export const useForm = (initialForm, validateForm) => {

    const [form, setform] = useState(initialForm);
    const [errors, seterrors] = useState({});
  
    const handleChange = (e) => {
  
    }
    const handleBlur = (e) => {
  
    }

  return (
    form,
     errors,
      handleChange,
       handleBlur
  )
}

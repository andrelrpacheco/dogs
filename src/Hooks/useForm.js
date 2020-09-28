import React from 'react'

const typesValidation = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Informe um email válido!'
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message: `A senha deve conter pelo menos 1 dígito, 1 letra maiúscula, 
    1 minúscula e no mínimo 8 caracteres`
  }
}

const useForm = (typeValidation) => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(null)

  function validation(value) {
    if (typesValidation === false) return true
    if (value.length === 0) {
      setError('Campo obrigatório!')
      return false
    } else if (typesValidation[typeValidation] && !typesValidation[typeValidation].regex.test(value)) {
      setError(typesValidation[typeValidation].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  function onChange({ target }) {
    if (error) validation(target.value)
    setValue(target.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validation: () => validation(value),
    onBlur: () => validation(value)
  }
}

export default useForm
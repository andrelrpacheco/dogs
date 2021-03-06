import React, { useContext } from 'react'
import { USER_POST } from '../../../Api/api'
import { UserContext } from '../../../UserContext'
import Input from '../../Forms/Input/Input'
import Button from '../../Forms/Button/Button'
import useForm from '../../../Hooks/useForm'
import useFetch from '../../../Hooks/useFetch'
import Error from '../../Helpers/Error'

import spinnerIcon from '../../../assets/spinner.svg'

const CreateAccount = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm()

  const { userLogin } = useContext(UserContext)
  const { loading, error, request } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })
    const { response } = await request(url, options)
    if (response.status === 200) userLogin(username.value, password.value)
  }

  return (
    <section className=''>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='E-mail' type='email' name='email' {...email} />
        <Input label='Senha' type='password' name='password' {...password} />
        {loading ? (
          <img src={spinnerIcon} alt='Carregando' />
        ) : (
            <Button>Cadastrar</Button>
          )}
        <Error error={error} />
      </form>
    </section>
  )
}

export default CreateAccount
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../UserContext'
import Input from '../../Forms/Input/Input'
import Button from '../../Forms/Button/Button'
import useForm from '../../../Hooks/useForm'
import spinnerIcon from '../../../assets/spinner.svg'
import Error from '../../Helpers/Error'

import './LoginForm.css'
import '../../Forms/Button/Button.css'

const LoginForm = () => {
  const { userLogin, error, loading } = useContext(UserContext)

  const username = useForm()
  const password = useForm()

  async function handleLogin(event) {
    event.preventDefault()

    if (username.validation() && password.validation()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form className='form' onSubmit={handleLogin}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />
        {
          loading
            ? <img src={spinnerIcon} alt='Carregando' />
            : <Button>Acessar</Button>
        }
        <Error error={error} />
      </form>

      <Link
        className='lostPassword'
        to='/login/lostPassword'>
        Perdeu a senha?
      </Link>

      <div className='create'>
        <h2 className='subtitle'>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className='button' to='/login/createAccount'>Cadastro</Link>
      </div>
    </section>
  )
}

export default LoginForm
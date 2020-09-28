import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import CreateAccount from '../CreateAccount/CreateAccount'
import LoginForm from '../LoginForm/LoginForm'
import LostPassword from '../LostPassword/LostPassword'
import ResetPassword from '../ResetPassword/ResetPassword'
import { UserContext } from '../../../UserContext'

import './Login.css'

const Login = () => {
  const { login } = useContext(UserContext)

  if (login === true) return <Navigate to='/account' />

  return (
    <section className='login'>
      <div className='forms'>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='createAccount' element={<CreateAccount />} />
          <Route path='lostPassword' element={<LostPassword />} />
          <Route path='resetPassword' element={<ResetPassword />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
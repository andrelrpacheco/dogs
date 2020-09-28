import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import UserHeaderNav from '../UserHeaderNav/UserHeaderNav'
import './UserHeader.css'

const UserHeader = () => {
  const [title, setTitle] = React.useState('')
  const location = useLocation()

  useEffect(() => {
    const { pathname } = location
    switch (pathname) {
      case '/account/statistics':
        setTitle('Estatísticas')
        break

      case '/account/postPhoto':
        setTitle('Postar Foto')
        break

      default:
        setTitle('Minha conta')
    }
  }, [location])

  return (
    <header className='header-user'>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader
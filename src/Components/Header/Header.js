import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import dogIcon from '../../assets/dogs.svg'
import { UserContext } from '../../UserContext'

const Header = () => {
  const { data } = useContext(UserContext)

  return (
    <header className='header'>
      <nav className='container nav'>
        <Link to='/' className='logo'>
          <img src={dogIcon} alt='Dog - Home' />
        </Link>
        {data ? (
          <Link to='/account' className='loginAccount'>
            {data.nome}
          </Link>
        ) : (
            <Link to='/login' className='loginAccount'>
              Login / Cria conta
            </Link>
          )}
      </nav>
    </header>
  )
}

export default Header
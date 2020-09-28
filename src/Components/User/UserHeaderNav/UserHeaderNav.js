import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../../UserContext'
import feedIcon from '../../../assets/feed.svg'
import statisticsIcon from '../../../assets/estatisticas.svg'
import addIcon from '../../../assets/adicionar.svg'
import logoutIcon from '../../../assets/sair.svg'

import './UserHeaderNav.css'

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null)
  const { userLogout } = React.useContext(UserContext)

  return (
    <nav className='nav-header'>
      <NavLink to='/account' end activeClassName='active'>
        <img src={feedIcon} alt='Minha Fotos' />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to='/account/statistics' activeClassName='active'>
        <img src={statisticsIcon} alt='Estatísticas' />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to='/account/postPhoto' activeClassName='active'>
        <img src={addIcon} alt='Adicionar Foto' />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={userLogout}>
        <img src={logoutIcon} alt='Sair da conta' />
        {mobile && 'Sair'}
      </button>
    </nav>
  )
}

export default UserHeaderNav
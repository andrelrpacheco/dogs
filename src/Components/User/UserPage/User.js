import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../../Feed/Feed'
import UserHeader from '../UserHeader/UserHeader'
import UserPhotoPost from '../UserPhoto/UserPhotoPost'
import UserStatistics from '../UserStatistics/UserStatistics'

const User = () => {
  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/postPhoto' element={<UserPhotoPost />} />
        <Route path='/statistics' element={<UserStatistics />} />
      </Routes>
    </section>
  )
}

export default User
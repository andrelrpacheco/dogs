import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Login from './Components/Login/LoginPage/Login'
import User from './Components/User/UserPage/User'
import ProtectedRoute from './Components/Helpers/ProtectedRoute'
import { UserStorage } from './UserContext'

import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login/*' element={<Login />} />
            <ProtectedRoute path='account/*' element={<User />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;

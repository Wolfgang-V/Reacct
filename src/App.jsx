import React, { useState, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import Fetch from './pages/Fetch'
import Search from './pages/search' 
import Formikk from './pages/Formikk'
import LoginPage from './pages/Login'
import AddProduct from './pages/AddProduct'
import Cookies from "universal-cookie"
import AuthGuard from './auth/AuthGuard'



const App = () => {

const cookies = new Cookies()
const [isAuth, setIsAuth] = useState(cookies.get("token") ? true : false)

// Check for token changes on focus
useEffect(() => {
  const checkAuth = () => {
    const token = cookies.get("token")
    setIsAuth(!!token)
  }

  checkAuth()
  window.addEventListener('focus', checkAuth)
  
  return () => window.removeEventListener('focus', checkAuth)
}, [])

  return (
    <>

      <Navbar />
      <Routes>

       <Route path="/login" element={<LoginPage/>} />
       <Route path="/" element={<Home/>} />

       
       <Route  element={<AuthGuard isAuth={isAuth}/>}>
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/formikk" element={<Formikk/>} />
        <Route path="/addproduct" element={<AddProduct/>} />

        <Route path= "/sp-contacts" element={ <Navigate to ={'/contacts'}/>} />
    {/*dynamic routing       assignment-nested/children route */}

        <Route path='/fetch' element={<Fetch/>} />
        <Route path='/profile/:username' element={<Profile/>} />
       </Route>

       <Route path="/search" element={<Search/>} />
       
        

        {/*wildcard routing*/}
        <Route path="*" element={<NotFound/>} />
        {/*programmatic routing*/}


       

       
 


      </Routes>

    </>
  )
}

export default App

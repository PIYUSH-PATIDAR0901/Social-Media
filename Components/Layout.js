import { Outlet } from 'react-router-dom'
import React from 'react'
// import  Home  from '../Pages/Home'
import Announacement from './Announacement'

import Footer from './Footer'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <>
    <Announacement/>
      <Navbar/>
      {/* <Home/> */}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout

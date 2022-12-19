import React from 'react'
import './Main.scss'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

export const Main = () => {
  return (
    <>
      <Header/>
      <div>Main</div>
      <Link to="/Contacts">to contacts</Link>
      <Footer/>
    </>
  )
}
import React from 'react'
import './Contacts.scss'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

export const Contacts = () => {
  return (
    <>
      <Header/>
      <div>Contacts</div>
      <Link to="/sdaem/">to home</Link>
      <Footer/>
    </>
  )
}
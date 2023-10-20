import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { DottedBox } from '../../Modules/DottedBox/DottedBox'
import './Error404.scss'

export const Error404 = () => {
  return (
    <>
      <Header/>
      <div className='ErrorPage'>
        <div className='ErrorPage_img'/>
        <div className='ErrorPage_container'>
          <div className='ErrorPage_container_left'>
            <div className='ErrorPage_container_left_title'>Ошибка 404</div>
            <div className='ErrorPage_container_left_text'>Возможно, у вас опечатка в адресе страницы, или её просто не существует</div>
            <Link to="/sdaem/">
              <div className='ErrorPage_container_left_button'>Вернуться на главную</div>
            </Link>
          </div>
          <div className='ErrorPage_container_right'>
            <div className='ErrorPage_container_right_img'/>
          </div>
        </div>
        <div className='DottedBoxYellowError404'>
          <DottedBox color={'#FFD54F'}/>
        </div>
        <div className='DottedBoxWhiteError404'>
          <DottedBox color={'#FFFFFF'}/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

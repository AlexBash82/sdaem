import React from 'react'
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
            <div className='ErrorPage_container_left_button'>Вернуться на главную</div>
          </div>
          <div className='ErrorPage_container_right'>
            <div className='ErrorPage_container_right_img'/>
          </div>
        </div>
        <DottedBox color={'#FFD54F'}/>
      </div>
      <Footer/>
    </>
  )
}

import React from 'react'
import './Main.scss'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { SearchBoard } from '../../components/SearchBoard/SearchBoard'

export const Main = () => {
  return (
    <>
      <Header/>
      <div className='Board'>
        <div className='Board_container'>
          <div className='Board_container_box'>
            <div className='Board_container_box_title'>
                <div>Sdaem.by - у нас живут</div>
                <div className='orange'>ваши объявления</div>
            </div>
            <SearchBoard/>
          </div>
          <div className='Board_container_img'/>
        </div>
      </div>
      <div>Main</div>
      <Footer/>
    </>
  )
}
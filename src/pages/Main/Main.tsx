import React from 'react'
import './Main.scss'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { SearchBoard } from '../../components/SearchBoard/SearchBoard'
import { Cards } from '../../components/Cards/Cards'
import { Lease } from '../../components/Lease/Lease'

export const Main = () => {
  return (
    <>
      <Header/>
      <div className='Board'>
        <div className='Board_container'>
          <div className='Board_container_img'/>
          <div className='Board_container_box'>
            <div className='Board_container_box_title'>
                <div>Sdaem.by - у нас живут</div>
                <div className='orange'>ваши объявления</div>
            </div>
            <SearchBoard/>
          </div>
        </div>
      </div>
      <Cards/>
      <Lease/>
      <div>Main</div>
      <Footer/>
    </>
  )
}
import React, { useState } from 'react'
import { CardLease } from '../CardLease/CardLease'
import './Lease.scss'

export const Lease = () => {
  const [firstPhoto, setFirstPhoto] = useState(1)

  const slideMoveForward = () => {
    if(firstPhoto <= 9){
      console.log('+')
      setFirstPhoto(prev => prev + 3)
    }
  }

  const slideMoveBack = () => {
    if(firstPhoto >= 4){
      console.log('-')
      setFirstPhoto(prev => prev - 3)
    }
  }

  return (
    <div className='Lease'>
      <div className='Lease_wrap'>
        <div className='Lease_wrap_container'>
          <div className='Lease_wrap_container_header'>
            <div className='Lease_wrap_container_header_left'>
              <div className='Lease_wrap_container_header_left_title-1'>КВАРТИРЫ НА СУТКИ</div>
              <div className='Lease_wrap_container_header_left_title-2'>Аренда квартир в Минске</div>
            </div>
            <div className='Lease_wrap_container_header_right'>
              <div className='Lease_wrap_container_header_right_button lease-btn-metro'>Метро</div>
              <div className='Lease_wrap_container_header_right_button'>Район</div>
            </div>
          </div>
          <div className='Lease_wrap_container_board'>
            <div className='Lease_wrap_container_board_cards'>
              <CardLease photoId={firstPhoto}/>
              <CardLease photoId={firstPhoto + 1}/>
              <CardLease photoId={firstPhoto + 2}/>
            </div>
            <div className='Lease_wrap_container_board_navi'>
              <div className='Lease_wrap_container_board_navi_buttons'>
                <div className='Lease_wrap_container_board_navi_buttons_left'
                onClick={() => slideMoveBack()}/>
                <div className='Lease_wrap_container_board_navi_buttons_right'
                onClick={() => slideMoveForward()}/>
              </div>
            </div>
            <div className='Lease_wrap_container_board_info'>
              <div className='Lease_wrap_container_board_info_left'>
                <div className='Lease_wrap_container_board_info_left_number'>341 <span>+</span></div>
                <div className='Lease_wrap_container_board_info_left_text'>Предложений по Минску</div>
              </div>
              <div className='Lease_wrap_container_board_info_line'/>
              <div className='Lease_wrap_container_board_info_right'>
                <div className='Lease_wrap_container_board_info_right_button'>Посмотреть все</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

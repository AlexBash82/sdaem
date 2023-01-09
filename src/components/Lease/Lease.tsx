import React from 'react'
import './Lease.scss'

export const Lease = () => {
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
        </div>
      </div>
    </div>
  )
}
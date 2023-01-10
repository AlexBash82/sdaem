import React from 'react'
import './CardLease.scss'

export const CardLease = () => {
  return (
    <div className='CardLease'>
      <div className='CardLease_gold'>Gold</div>
      <div className='CardLease_picture'>
        <div className='CardLease_picture_photo'/>
      </div>
      <div className='CardLease_details'>
        <div className='CardLease_details_header'>
          <div className='CardLease_details_header_prise'>
            <div className='CardLease_details_header_prise_text'>65.00 BYN</div>
            <div className='CardLease_details_header_prise_title'>за сутки</div>
          </div>
          <div className='CardLease_details_header_capacity'>
            <div className='CardLease_details_header_capacity_members'>4 (2+2)</div>
            <div className='CardLease_details_header_capacity_rooms'>4 комн.</div>
            <div className='CardLease_details_header_capacity_area'>179 м²</div>
          </div>
        </div>

        <div className='CardLease_details_location'>
          <div className='CardLease_details_location_city'>Минск, б-р Мулявина, д. 10</div>
          <div className='CardLease_details_location_other'>
            <div className='CardLease_details_location_other_subway'>Грушевка</div>
            <div className='CardLease_details_location_other_district'>Шабаны</div>
          </div>
        </div>

        <div className='CardLease_details_description'>Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...</div>

        <div className='CardLease_details_line'/>

        <div className='CardLease_details_buttons'>
          <div className='CardLease_details_buttons_contacts'>Контакты</div>
          <div className='CardLease_details_buttons_more'>Подробнее</div>
        </div>
      </div>
    </div>
  )
}

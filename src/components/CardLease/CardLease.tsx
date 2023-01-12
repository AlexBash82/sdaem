import React, { useEffect, useState } from 'react'
import './CardLease.scss'

interface CardLeaseProps {
  photoId: number,
}

export const CardLease: React.FC<CardLeaseProps> = (props) => {
  const leaseAparts = [
    {
      id: 1,
      photo: 'https://github.com/AlexBash82/sdaem/blob/master/public/jpg/apart001.jpg?raw=true',
      isGold: true,
      prise: '65.00 BYN',
      members: '4 (2+2)',
      rooms: '4 комн.',
      area: '179 м²',
      address: 'Минск, б-р Мулявина, д. 10',
      subway: 'Грушевка',
      district: 'Шабаны',
      discription: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, ...',
    },
    {
      id: 2,
      photo: 'https://github.com/AlexBash82/sdaem/blob/master/public/jpg/apart002.jpg?raw=true',
      isGold: false,
      prise: '67.00 BYN',
      members: '5 (2+3)',
      rooms: '5 комн.',
      area: '182 м²',
      address: 'Минск, б-р Мулявина, д. 15',
      subway: 'Грушевка',
      district: 'Шабаны',
      discription: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
    },
    {
      id: 3,
      photo: 'https://alexbash82.github.io/sdaem/static/media/apart003.cfb11c09c3cf763660c9.jpg',
      isGold: true,
      prise: '80.00 BYN',
      members: '3 (2+1)',
      rooms: '4 комн.',
      area: '190 м²',
      address: 'Минск, б-р Мулявина, д. 11',
      subway: 'Грушевка',
      district: 'Шабаны',
      discription: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, ...',
    },
    {
      id: 4,
      photo: 'https://alexbash82.github.io/sdaem/static/media/apart004.6365c546e3f024c387bc.jpg',
      isGold: true,
      prise: '78.00 BYN',
      members: '6 (2+4)',
      rooms: '6 комн.',
      area: '185 м²',
      address: 'Минск, б-р Мулявина, д. 25',
      subway: 'Грушевка',
      district: 'Шабаны',
      discription: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
    },
    {
      id: 5,
      photo: 'https://alexbash82.github.io/sdaem/static/media/apart001.9959e50d531cb7584842.jpg',
      isGold: true,
      prise: '65.00 BYN',
      members: '4 (2+2)',
      rooms: '4 комн.',
      area: '179 м²',
      address: 'Минск, б-р Мулявина, д. 10',
      subway: 'Грушевка',
      district: 'Шабаны',
      discription: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, ...',
    },
    {
      id: 6,
      photo: 'https://alexbash82.github.io/sdaem/static/media/apart002.fb054b5476f22dfa0a76.jpg',
      isGold: false,
      prise: '67.00 BYN',
      members: '5 (2+3)',
      rooms: '5 комн.',
      area: '182 м²',
      address: 'Минск, б-р Мулявина, д. 15',
      subway: 'Грушевка',
      district: 'Шабаны',
      discription: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
    },
    {
      id: 7,
      photo: 'https://alexbash82.github.io/sdaem/static/media/apart003.cfb11c09c3cf763660c9.jpg',
      isGold: true,
      prise: '80.00 BYN',
      members: '3 (2+1)',
      rooms: '4 комн.',
      area: '190 м²',
      address: 'Минск, б-р Мулявина, д. 11',
      subway: 'Грушевка',
      district: 'Шабаны',
      discription: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, ...',
    },
    {
      id: 8,
      photo: 'https://alexbash82.github.io/sdaem/static/media/apart004.6365c546e3f024c387bc.jpg',
      isGold: true,
      prise: '78.00 BYN',
      members: '6 (2+4)',
      rooms: '7 комн.',
      area: '185 м²',
      address: 'Минск, б-р Мулявина, д. 25',
      subway: 'Грушевка',
      district: 'Шабаны',
      discription: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
    },
    {
      id: 9,
      photo: 'https://alexbash82.github.io/sdaem/static/media/apart001.9959e50d531cb7584842.jpg',
      isGold: true,
      prise: '65.00 BYN',
      members: '4 (2+2)',
      rooms: '4 комн.',
      area: '179 м²',
      address: 'Минск, б-р Мулявина, д. 10',
      subway: 'Грушевка',
      district: 'Шабаны',
      discription: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, ...',
    },
    {
      id: 10,
      photo: 'https://alexbash82.github.io/sdaem/static/media/apart002.fb054b5476f22dfa0a76.jpg',
      isGold: false,
      prise: '67.00 BYN',
      members: '5 (2+3)',
      rooms: '5 комн.',
      area: '182 м²',
      address: 'Минск, б-р Мулявина, д. 15',
      subway: 'Грушевка',
      district: 'Шабаны',
      discription: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
    },
    {
      id: 11,
      photo: 'https://alexbash82.github.io/sdaem/static/media/apart003.cfb11c09c3cf763660c9.jpg',
      isGold: true,
      prise: '80.00 BYN',
      members: '3 (2+1)',
      rooms: '4 комн.',
      area: '190 м²',
      address: 'Минск, б-р Мулявина, д. 11',
      subway: 'Грушевка',
      district: 'Шабаны',
      discription: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, ...',
    },
    {
      id: 12,
      photo: 'https://alexbash82.github.io/sdaem/static/media/apart004.6365c546e3f024c387bc.jpg',
      isGold: true,
      prise: '78.00 BYN',
      members: '6 (2+4)',
      rooms: '6 комн.',
      area: '185 м²',
      address: 'Минск, б-р Мулявина, д. 25',
      subway: 'Грушевка',
      district: 'Шабаны',
      discription: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
    },
  ]

  const {
    photoId,
  } = props

  const profile = leaseAparts.filter(item => item.id === photoId)[0]

  return (
    <div className='CardLease'>
      {profile.isGold ? <div className='CardLease_gold'>Gold</div> : null}
      {/* <div className='CardLease_gold'>Gold</div> */}
      <div className='CardLease_picture'>
        <div className='CardLease_picture_photo'>
          <img src={profile.photo}/>
        </div>
      </div>
      <div className='CardLease_details'>
        <div className='CardLease_details_header'>
          <div className='CardLease_details_header_prise'>
            <div className='CardLease_details_header_prise_text'>{profile.prise}</div>
            <div className='CardLease_details_header_prise_title'>за сутки</div>
          </div>
          <div className='CardLease_details_header_capacity'>
            <div className='CardLease_details_header_capacity_members'>{profile.members}</div>
            <div className='CardLease_details_header_capacity_rooms'>{profile.rooms}</div>
            <div className='CardLease_details_header_capacity_area'>{profile.area}</div>
          </div>
        </div>

        <div className='CardLease_details_location'>
          <div className='CardLease_details_location_city'>{profile.address}</div>
          <div className='CardLease_details_location_other'>
            <div className='CardLease_details_location_other_subway'>{profile.subway}</div>
            <div className='CardLease_details_location_other_district'>{profile.district}</div>
          </div>
        </div>

        <div className='CardLease_details_description'>{profile.discription}</div>

        <div className='CardLease_details_line'/>

        <div className='CardLease_details_buttons'>
          <div className='CardLease_details_buttons_contacts'>Контакты</div>
          <div className='CardLease_details_buttons_more'>Подробнее</div>
        </div>
      </div>
    </div>
  )
}

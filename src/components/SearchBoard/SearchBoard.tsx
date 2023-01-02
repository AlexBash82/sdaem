import React, { useState } from 'react'
import { List } from '../List/List'
import './SearchBoard.scss'

export const SearchBoard = () => {
  const [choice, setChoice] = useState('apartments')
  const [isOpenCity, setIsOpenCity] = useState(false)
  const [choicenCity, setChoicenCity] = useState('Выберите') 
  const [isOpenApartment, setIsOpenApartment] = useState(false)
  const [choicenApartment, setChoicenApartment] = useState('Выберите')

  const openCloseList = (name: string) => {
    switch (name) {
      case 'city':
        if(isOpenCity) {
          setIsOpenCity(false)
        } else {
          setIsOpenCity(true)
        }
        break;
      case 'apartment':
        if(isOpenApartment) {
          setIsOpenApartment(false)
        } else {
          setIsOpenApartment(true)
        }
        break;
    }


  }

  const selectCity = (name: string) => {
    setChoicenCity(name);
    setIsOpenCity(false);
  }

  const selectApartment = (name: string) => {
    setChoicenApartment(name);
    setIsOpenApartment(false);
  }

  return (
    <div className='Menu'>
      <div className='Menu_bookmarks'>
        <div
          className={`Menu_bookmarks_item ${choice === 'apartments'? 'choice' : ''}`}
          onClick={() => setChoice('apartments')}
        >Квартиры на сутки</div>

        <div
          className={`Menu_bookmarks_item ${choice === 'cottages'? 'choice' : ''}`}
          onClick={() => setChoice('cottages')}
        >Коттеджи и усадьбы</div>

        <div
          className={`Menu_bookmarks_item ${choice === 'saunas'? 'choice' : ''}`}
          onClick={() => setChoice('saunas')}
        >Бани и сауны</div>

        <div
          className={`Menu_bookmarks_item ${choice === 'cars'? 'choice' : ''}`}
          onClick={() => setChoice('cars')}
        >Авто напрокат</div>
      </div>
      <div className='Menu_main'>
        {choice !== 'apartments' ? false : 
          <div className='Menu_main_apartments'>
            <div className='Menu_main_apartments_list'>
              <div className='Menu_main_apartments_list_title'>Город</div>
              <div className='Menu_main_apartments_list_box'>
                <div
                  className={`Menu_main_apartments_list_box_button ${isOpenCity? 'activeButton' : ''}`}
                  onClick={() => openCloseList('city')}
                  >{choicenCity}
                </div>
                <div className='chevron'/>
                {isOpenCity ? <List select={selectCity} name={'city'}/> : false}
              </div>
            </div>

            <div className='line'/>

            <div className='Menu_main_apartments_list'>
              <div className='Menu_main_apartments_list_title'>Комнаты</div>
              <div className='Menu_main_apartments_list_box'>
                <div
                  className={`Menu_main_apartments_list_box_button ${isOpenApartment? 'activeButton' : ''}`}
                  onClick={() => openCloseList('apartment')}
                  >{choicenApartment}
                </div>
                <div className='chevron'/>
                {isOpenApartment ? <List select={selectApartment} name={'apartment'}/> : false}
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

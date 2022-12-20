import React, { useState } from 'react'
import { List } from '../List/List'
import './SearchBoard.scss'

export const SearchBoard = () => {
  const [choice, setChoice] = useState('cottages')
  const [isOpen, setIsOpen] = useState(false)
  const [opened, setOpened] = useState('')

  const openClose = (name: string) => {
    if(isOpen) {
      setIsOpen(false)
      setOpened('')
    } else {
      setOpened(name)
      setIsOpen(true)
    }
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
              <div
                className='Menu_main_apartments_list_button'
                onClick={() => openClose('city')}
                >Выберите<div className='chevron'/>
              </div>
              {(opened === 'city') ? <List name={'city'}/> : false}
            </div>
            <div className='line'/>
            <div className='Menu_main_apartments_list'>
              <div className='Menu_main_apartments_list_title'>Комнаты</div>
              <div
                className='Menu_main_apartments_list_button'
                //onClick={() => openClose('city')}
                >Выберите
                <div className='chevron'/>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

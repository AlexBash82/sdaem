import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

export const Header = () => {
  return (
    <div className='Header'>
      <div className='Header_first'>
        <div className='Header_first_container'>
          <div className='Header_first_container_left'>
            <Link to="/sdaem/">
              <div className='Header_first_container_left_buttons'>Главная</div>
            </Link>
            <div className='Header_first_container_left_buttons'>Новости</div>
            <div className='Header_first_container_left_buttons'>Размещение и тарифы</div>
            <div className='Header_first_container_left_buttons point'>Объявления на карте</div>
            <Link to="/sdaem/contacts">
              <div className='Header_first_container_left_buttons'>Контакты</div>
            </Link>
          </div>
          <div className='Header_first_container_right'>
            <div className='Header_first_container_right_buttons like'>Закладки</div>
            <div className='Header_first_container_right_buttons login'>Вход и регистрация</div>
          </div>
        </div>

      </div>
      <div className='Header_second'>
        <div className='Header_second_container'>
          <div className='Header_second_container_logo'/>
          <div className='Header_second_container_center'>
            <div className='Header_second_container_center_buttons pointY'>Квартиры на сутки</div>
            <div className='Header_second_container_center_buttons'>Коттеджи и усадьбы</div>
            <div className='Header_second_container_center_buttons'>Бани и Сауны</div>
            <div className='Header_second_container_center_buttons'>Авто напрокат</div>
          </div>
          <button className='Header_second_container_place'>+  Разместить объявление</button>
        </div>
      </div>
    </div>
  )
}

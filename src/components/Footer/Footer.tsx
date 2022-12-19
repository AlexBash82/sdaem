import React from 'react'
import './Footer.scss'

export const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer_container'>
        <div className='Footer_container_main'>
          <div className='Footer_container_main_box'>
            <div className='Footer_container_main_box_logo'/>
            <div className='Footer_container_main_box_text'>СДАЁМ БАЙ</div>
          </div>
          <div className='Footer_container_main_info'>
            <div className='Footer_container_main_info_text'>ИП Шушкевич Андрей Викторович</div>
            <div className='Footer_container_main_info_text'>УНП 192602485 Минским горисполкомом</div>
            <div className='Footer_container_main_info_text'>10.02.2016</div>
            <div className='Footer_container_main_info_text'>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</div>
            <div className='Footer_container_main_info_text'>+375 29 621 48 33, sdaem@sdaem.by</div>
            <div className='Footer_container_main_info_text'>Режим работы: 08:00-22:00</div>
          </div>
        </div>
        <div className='Footer_container_additional'>
          <div className='Footer_container_additional_search'>
            <div className='Footer_container_additional_search_main'>
              <div className='Footer_container_additional_search_main_text'>Коттеджи и усадьбы</div>
              <div className='Footer_container_additional_search_main_text'>Бани и сауны</div>
              <div className='Footer_container_additional_search_main_text'>Авто на прокат</div>
            </div>
            <div className='Footer_container_additional_search_apartments'>
              <div className='Footer_container_additional_search_apartments_title'>Квартиры</div>
              <div className='Footer_container_additional_search_apartments_box'>
                <div className='Footer_container_additional_search_apartments_box_column'>
                  <div>Квартиры в Минске</div>
                  <div>Квартиры в Гомеле</div>
                  <div>Квартиры в Бресте</div>
                </div>
                <div className='Footer_container_additional_search_apartments_box_column'>
                  <div>Квартиры в Витебске</div>
                  <div>Квартиры в Гродно</div>
                  <div>Квартиры в Могилеве</div>
                </div>
              </div>
            </div>
            <div className='Footer_container_additional_search_others'>
              <div>Новости</div>
              <div>Размещение и тарифы</div>
              <div>Объявления на карте</div>
              <div>Контакты</div>
            </div>
          </div>
          <div className='Footer_container_additional_box'>
            <div className='Footer_container_additional_box_social'>
              <div className='Footer_container_additional_box_social_text'>Мы в соцсетях</div>
              <div className='Footer_container_additional_box_social_inst'/>
              <div className='Footer_container_additional_box_social_vk'/>
              <div className='Footer_container_additional_box_social_fb'/>
            </div>
            <div className='Footer_container_additional_box_payment'>
              <div className='Footer_container_additional_box_payment_visa'/>
              <div className='Footer_container_additional_box_payment_webpay'/>
              <div className='Footer_container_additional_box_payment_verified'/>
              <div className='Footer_container_additional_box_payment_mastercard'/>
              <div className='Footer_container_additional_box_payment_secure'/>
              <div className='Footer_container_additional_box_payment_belkart'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

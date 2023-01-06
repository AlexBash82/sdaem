import React from 'react'
import './Cards.scss'

export const Cards = () => {
  return (
    <div className='Cards'>
      <div className='Cards_container'>
        <div className='Cards_container_left'>
          <div className='Cards_container_left_card wide apartments'>
            <div className='Cards_container_left_card_wrap'>
              <div className='Cards_container_left_card_wrap_title-1'>СНЯТЬ КВАРТИРУ</div>
              <div className='Cards_container_left_card_wrap_title-2'>Квартиры на сутки</div>
              <div className='Cards_container_left_card_wrap_buttons'>
                <div className='Cards_container_left_card_wrap_buttons_item'>Минск</div>
                <div className='Cards_container_left_card_wrap_buttons_item'>Витебск</div>
                <div className='Cards_container_left_card_wrap_buttons_item'>Гродно</div>
                <div className='Cards_container_left_card_wrap_buttons_item'>Гомель</div>
                <div className='Cards_container_left_card_wrap_buttons_item'>Брест</div>
                <div className='Cards_container_left_card_wrap_buttons_item'>Могилев</div>
              </div>
            </div>
          </div>

          <div className='Cards_container_left_card narrow cottages'>
            <div className='Cards_container_left_card_wrap'>
              <div className='Cards_container_left_card_wrap_title-1'>СНЯТЬ КОТТЕДЖ НА ПРАЗДНИК</div>
              <div className='Cards_container_left_card_wrap_title-2'>Коттеджи и усадьбы</div>
              <div className='Cards_container_left_card_wrap_round-button'>
                <div className='Cards_container_left_card_wrap_round-button_chevron'/>
              </div>
            </div>
          </div>

          <div className='Cards_container_left_card narrow saunas'>
            <div className='Cards_container_left_card_wrap'>
              <div className='Cards_container_left_card_wrap_title-1'>ПОПАРИТЬСЯ В БАНЕ С ДРУЗЬЯМИ</div>
              <div className='Cards_container_left_card_wrap_title-2'>Бани и сауны</div>
              <div className='Cards_container_left_card_wrap_round-button'>
                <div className='Cards_container_left_card_wrap_round-button_chevron'/>
              </div>
            </div>
          </div>

          <div className='Cards_container_left_card wide cars'>
            <div className='Cards_container_left_card_wrap'>
              <div className='Cards_container_left_card_wrap_title-1'>ЕСЛИ СРОЧНО НУЖНА МАШИНА</div>
              <div className='Cards_container_left_card_wrap_title-2'>Авто на прокат</div>
              <div className='Cards_container_left_card_wrap_round-button'>
                <div className='Cards_container_left_card_wrap_round-button_chevron'/>
              </div>
            </div>
          </div>
        </div>
        <div className='Cards_container_right'></div>
      </div>
    </div>
  )
}

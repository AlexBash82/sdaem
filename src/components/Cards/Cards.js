import React from 'react'
import './Cards.scss'

export const Cards = () => {
  const apartmentsList = [
    {
      city: 'Квартиры в Минске',
      amount: 3567,
    },
    {
      city: 'Квартиры в Гомеле',
      amount: 2032,
    },
    {
      city: 'Квартиры в Гродно',
      amount: 2302,
    },
    {
      city: 'Квартиры в Могилеве',
      amount: 110,
    },
    {
      city: 'Квартиры в Бресте',
      amount: 110
    },
    {
      city: 'Квартиры в Витебске',
      amount: 110
    },
    
  ]

  const cottagesList = [
    {
      kind: 'Агроусадьбы',
      amount: 110,
    },
    {
      kind: 'Коттеджи',
      amount: 110,
    },
    {
      kind: 'Загородный комплекс',
      amount: 110,
    },
    {
      kind: 'Базы отдыха',
      amount: 110,
    },    
  ]

  const popularDirectList = [
    'Коттеджи и усадьбы на о. Брасласких ', 'Коттеджи и усадьбы (жилье) на Нарочи', 'Коттеджи и усадьбы (жилье) у воды, на берегу, на озере',
  ]

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
        <div className='Cards_container_right'>
          <div className='Cards_container_right_box apartmentsList'>
            <div className='Cards_container_right_box_title'>Квартиры</div>
            <div className='Cards_container_right_box_list'>
              {apartmentsList.map((item, index) => {
                return (
                  <div
                  key={index}
                  className='Cards_container_right_box_list_item'>
                    <div className='Cards_container_right_box_list_item_title'>{item.city}</div>
                    <div className='Cards_container_right_box_list_item_amount'>{item.amount}</div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className='Cards_container_right_box cottagesList'>
            <div className='Cards_container_right_box_title'>Коттеджи и усадьбы</div>
            <div className='Cards_container_right_box_list'>
              {cottagesList.map((item, index) => {
                return (
                  <div
                  key={index}
                  className='Cards_container_right_box_list_item'>
                    <div className='Cards_container_right_box_list_item_title'>{item.kind}</div>
                    <div className='Cards_container_right_box_list_item_amount'>{item.amount}</div>
                  </div>
                )
              })}
               <div className='Cards_container_right_box_list_item_more'>Еще</div>
            </div>
          </div>

          <div className='Cards_container_right_box directList'>
            <div className='Cards_container_right_box_title'>Популярные направления</div>
            <div className='Cards_container_right_box_list'>
              {popularDirectList.map((item, index) => {
                return (
                  <div
                  key={index}
                  className='Cards_container_right_box_list_item'>
                    <div className='Cards_container_right_box_list_item_title'>{item}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

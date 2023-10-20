import React from 'react'
import './List.scss'

interface ListProps {
  name: string,
  select: Function,
}

export const List: React.FC<ListProps>  = (props) => {
  const {
    name,
    select,
  } = props

  const city = ['Минск', 'Гомель', 'Брест', 'Витебск', 'Гродно', 'Могилев']
  const apartment = ['1 комн.', '2 комн.', '3 комн.', '4 комн.', '5 комн.',]

  return (
    <div className='Main'>
      {name === 'city' ? city.map(item => <div key={item} onClick={() => select(item)} className='Main_item'>{item}</div>) : false}
      {name === 'apartment' ? apartment.map(item => <div key={item} onClick={() => select(item)} className='Main_item'>{item}</div>) : false}
    </div>
  )
}

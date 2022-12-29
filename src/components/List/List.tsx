import React from 'react'
import './List.scss'

interface ListProps {
  name: string,
}

export const List: React.FC<ListProps>  = (props) => {
  const {
    name,
  } = props

  return (
    <div>List{name}</div>
  )
}

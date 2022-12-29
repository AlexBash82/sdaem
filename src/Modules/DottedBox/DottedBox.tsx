import React from 'react'
import './DottedBox.scss'

interface DottedBoxProps {
  color: string,
}

export const DottedBox: React.FC<DottedBoxProps> = (props) => {
  const {
    color,
  } = props

  const four = [1, 2, 3, 4]

  return (
    <div className='columns'>
      {four.map((item) => {
        return (
          <div
          className='row'
          key={item}
          >
            {four.map((index) => {
              return (
                <div
                style={{background: color}}
                className='circle'
                key={index}
                />
              )
            })}
          </div>          
        )
      })}
    </div>

  )
}
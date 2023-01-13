import React from 'react'
import './ContactLease.scss'

interface ContactLeaseProps {
  profileId: number,
}

export const ContactLease: React.FC<ContactLeaseProps> = (props) => {
  const {
    profileId,
   } = props
   
   const owner = [
    {
      id: 1,
      name: 'Dmitriy',
      phone: ' +375 (29) 291-14-01',
      mail: 'vladimir01@tut.by',
      photo: '',
    },
    {
      id: 2,
      name: 'Dmitriy',
      phone: ' +375 (29) 291-14-02',
      mail: 'vladimir02@tut.by',
    },
    {
      id: 3,
      name: 'Dmitriy',
      phone: ' +375 (29) 291-14-03',
      mail: 'vladimir03@tut.by',
    },
    {
      id: 4,
      name: 'Dmitriy',
      phone: ' +375 (29) 291-14-04',
      mail: 'vladimir04@tut.by',
    },
    {
      id: 5,
      name: 'Dmitriy',
      phone: ' +375 (29) 291-14-05',
      mail: 'vladimir05@tut.by',
    },
    {
      id: 6,
      name: 'Dmitriy',
      phone: ' +375 (29) 291-14-06',
      mail: 'vladimir06@tut.by',
    },
    {
      id: 7,
      name: 'Dmitriy',
      phone: ' +375 (29) 291-14-07',
      mail: 'vladimir07@tut.by',
    },
    {
      id: 8,
      name: 'Dmitriy',
      phone: ' +375 (29) 291-14-08',
      mail: 'vladimir08@tut.by',
    },
    {
      id: 9,
      name: 'Dmitriy',
      phone: ' +375 (29) 291-14-09',
      mail: 'vladimir09@tut.by',
    },
    {
      id: 10,
      name: 'Dmitriy',
      phone: ' +375 (29) 291-14-10',
      mail: 'vladimir10@tut.by',
    },
    {
      id: 11,
      name: 'Dmitriy',
      phone: ' +375 (29) 291-14-11',
      mail: 'vladimir11@tut.by',
    },
    {
      id: 12,
      name: 'Dmitriy',
      phone: ' +375 (29) 291-14-12',
      mail: 'vladimir12@tut.by',
    },
   ]

  return (
    <div className='Contact'>
      <div className='Contact_container'>

      </div>
    </div>
  )
}

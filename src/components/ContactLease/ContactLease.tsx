import React from 'react'
import './ContactLease.scss'

interface ContactLeaseProps {
  profileId: number,
}

export const ContactLease: React.FC<ContactLeaseProps> = (props) => {
  const {
    profileId,
   } = props
   
   const ownerList = [
    {
      id: 1,
      name: 'Dmitriy',
      phone: '+375 (29) 291-14-01',
      mail: 'dmitriy01@tut.by',
      photo: 'https://github.com/AlexBash82/sdaem/blob/master/public/jpg/owner.jpg?raw=true',
    },
    {
      id: 2,
      name: 'Vladimir',
      phone: '+375 (29) 291-14-02',
      mail: 'vladimir02@tut.by',
      photo: 'https://github.com/AlexBash82/sdaem/blob/master/public/jpg/owner.jpg?raw=true',
    },
    {
      id: 3,
      name: 'Ruslan',
      phone: '+375 (29) 291-14-03',
      mail: 'ruslan03@tut.by',
      photo: 'https://github.com/AlexBash82/sdaem/blob/master/public/jpg/owner.jpg?raw=true',
    },
    {
      id: 4,
      name: 'Sergey',
      phone: '+375 (29) 291-14-04',
      mail: 'sergey04@tut.by',
      photo: 'https://github.com/AlexBash82/sdaem/blob/master/public/jpg/owner.jpg?raw=true',
    },
    {
      id: 5,
      name: 'Dmitriy',
      phone: '+375 (29) 291-14-05',
      mail: 'dmitriy05@tut.by',
      photo: 'https://github.com/AlexBash82/sdaem/blob/master/public/jpg/owner.jpg?raw=true',
    },
    {
      id: 6,
      name: 'Vladimir',
      phone: '+375 (29) 291-14-06',
      mail: 'vladimir06@tut.by',
      photo: 'https://github.com/AlexBash82/sdaem/blob/master/public/jpg/owner.jpg?raw=true',
    },
    {
      id: 7,
      name: 'Ruslan',
      phone: '+375 (29) 291-14-07',
      mail: 'ruslan07@tut.by',
      photo: 'https://github.com/AlexBash82/sdaem/blob/master/public/jpg/owner.jpg?raw=true',
    },
    {
      id: 8,
      name: 'Sergey',
      phone: '+375 (29) 291-14-08',
      mail: 'sergey08@tut.by',
      photo: 'https://github.com/AlexBash82/sdaem/blob/master/public/jpg/owner.jpg?raw=true',
    },
    {
      id: 9,
      name: 'Dmitriy',
      phone: '+375 (29) 291-14-09',
      mail: 'dmitriy09@tut.by',
      photo: 'https://github.com/AlexBash82/sdaem/blob/master/public/jpg/owner.jpg?raw=true',
    },
    {
      id: 10,
      name: 'Vladimir',
      phone: '+375 (29) 291-14-10',
      mail: 'vladimir10@tut.by',
      photo: 'https://github.com/AlexBash82/sdaem/blob/master/public/jpg/owner.jpg?raw=true',
    },
    {
      id: 11,
      name: 'Ruslan',
      phone: '+375 (29) 291-14-11',
      mail: 'ruslan11@tut.by',
      photo: 'https://github.com/AlexBash82/sdaem/blob/master/public/jpg/owner.jpg?raw=true',
    },
    {
      id: 12,
      name: 'Sergey',
      phone: '+375 (29) 291-14-12',
      mail: 'sergey12@tut.by',
      photo: 'https://github.com/AlexBash82/sdaem/blob/master/public/jpg/owner.jpg?raw=true',
    },
   ]

   const owner = ownerList.filter(item => item.id === profileId)[0]

  return (
    <div className='Contact'>
      <div className='Contact_photo'>
        <img src={owner.photo}/>
      </div>
      <div className='Contact_title'>Владелец</div>
      <div className='Contact_name'>{owner.name}</div>
      <div className='Contact_phone'>{owner.phone}</div>
      <div className='Contact_mail'>{owner.mail}</div>
      <div className='Contact_buttons'>
        <div className='Contact_buttons_viber'/>
        <div className='Contact_buttons_whatsapp'/>
        <div className='Contact_buttons_email'/>
      </div>
    </div>
  )
}

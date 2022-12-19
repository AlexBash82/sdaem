import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { Contacts } from './pages/Contacts/Conacts';
import { Main } from './pages/Main/Main';

function App() {
  return (
    <>
      <Routes>
        <Route path='/sdaem/' element={<Main/>}/>
        <Route path='/sdaem/contacts' element={<Contacts/>}/>
      </Routes>
    </>
  );
}

export default App;

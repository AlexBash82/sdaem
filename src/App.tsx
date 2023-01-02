import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { Contacts } from './pages/Contacts/Conacts';
import { Error404 } from './pages/Error404/Error404';
import { Main } from './pages/Main/Main';

function App() {
  return (
    <>
      <Routes>
        <Route path='/sdaem/' element={<Main/>}/>
        <Route path='/sdaem/contacts' element={<Contacts/>}/>
        <Route path='/sdaem/*' element={<Error404/>}/>
        <Route path='/sdaem/404' element={<Error404/>}/>
      </Routes>
    </>
  );
}

export default App;

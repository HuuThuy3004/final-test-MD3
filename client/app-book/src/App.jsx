import React from 'react'
import {Route, Routes} from 'react-router-dom'
import ListBook from './components/ListBook.jsx'
import AddBook from './components/AddBook.jsx'


export default function App() {

    
  return (
   <>
      <Routes>
        <Route path='/list' element={<ListBook/>} />
        <Route path='/add' element={<AddBook/>} />
      </Routes>
   </>
  )
}

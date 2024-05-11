import React from 'react'
import {Route, Routes} from 'react-router-dom'
import ListBook from './components/ListBook.jsx'
import UpdateBook from './components/UpdateBook.jsx'
import AddBook from './components/AddBook.jsx'
import ListAuthor from './components/ListAuthor.jsx'
import AddAuthor from './components/AddAuthor.jsx'


export default function App() {

    
  return (
   <>
      <Routes>
        <Route path='/' element={<ListBook/>} />
        <Route path='/author' element={<ListAuthor/>} />
        <Route path='/add' element={<AddBook/>} />
        <Route path='/addAuthor' element={<AddAuthor/>} />
        <Route path='/update/:id' element={<UpdateBook/>} />
      </Routes>
   </>
  )
}

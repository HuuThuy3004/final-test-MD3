import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

export default function ListAuthor() {
  const [author, setAuthor] = useState([])

  useEffect(async () => {
    let books = await axios.get("http://localhost:8080/api/v1/authors")
    setAuthor(books.data)
  }, [])

  return (
    <div>
      <h1>
        <Link to='/'>
            <ArrowBackIcon/>
        </Link>
        The list author
        <Link to='/addAuthor'>
          <AddCircleSharpIcon />
        </Link>
      </h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Biography</th>
          </tr>
        </thead>
        <tbody>
          {author.map((item, index) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.biography}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

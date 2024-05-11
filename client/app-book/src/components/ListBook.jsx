import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { Link } from 'react-router-dom';

export default function ListBook() {
    const [book, setBook] = useState([])

    useEffect(async () => {
        let books = await axios.get("http://localhost:8080/api/v1/books")
        setBook(books.data)
    }, [])
    

    return (
        <div>
            <h1>
                The list book 
                <Link to='/add'>
                    <AddCircleSharpIcon/>
                </Link>
            </h1>
            <table>
                <thead>
                    <tr>
                        <th>Stt</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Created_at</th>
                        <th>Updated_at</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {book.map((item, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.created_at}</td>
                                <td>{item.upadated_at}</td>
                                <td className='function'>
                                    <EditRoundedIcon />
                                    <DeleteIcon />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

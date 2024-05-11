import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { Link, useNavigate } from 'react-router-dom';

export default function ListBook() {
    const [book, setBook] = useState([])
    const navigate = useNavigate()

    useEffect(async () => {
        let books = await axios.get("http://localhost:8080/api/v1/books")
        setBook(books.data)
    }, [])
    

    const handleDelete = (id) => {
        const conf = window.confirm('Do you want to delete ??')
        if (conf) {
            axios.delete('http://localhost:8080/api/v1/book/' + id)
            .then( res => {
                alert(`Deleted the book with id ${id}`)
                navigate('/')
            }) 
            .catch(
                err => console.log(err)
            )
        }
    }


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
                        <th>ID</th>
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
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.created_at}</td>
                                <td>{item.upadated_at}</td>
                                <td className='function'>
                                    <Link to={`/update/${item.id}`}><EditRoundedIcon/></Link>
                                    <span onClick={e => handleDelete(item.id)}><DeleteIcon /></span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Link to='/author'>See Author</Link>
        </div>
    )
}

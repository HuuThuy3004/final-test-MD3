import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './css/AddBook.css'

export default function AddBook() {
    //Các thầy chấm điểm nhớ reaload trang F5 lại nha các thầy
    const [books, setBooks] = useState({
        name: '',
        description: '',
        price: '',
    });

    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        await axios.post('http://localhost:8080/api/v1/book' , books)
        .then( res=>{
            alert('Add book successfully!')
            navigate('/')
        })
        .catch(err => console.log(err))
    }


    return (
        <div className='form-add'>
            <h1>
                Add Book
                <Link to='/'>
                    <ArrowBackIcon />
                </Link>
            </h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>Name:</td>
                        <td>
                            <input type="text" name='name' placeholder='Enter name' onChange={ e => setBooks({...books , name: e.target.value})} />
                        </td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>
                            <input type="text" name='description' placeholder='Enter description' className='ipt-des' onChange={ e => setBooks({...books , description: e.target.value})} />
                        </td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td>
                            <input type="number" name='price' placeholder='Enter price' onChange={ e => setBooks({...books , price: e.target.value})} />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button className='btn-add'>Add Book</button>
                        </td>
                    </tr>
                </table>
            </form>
            

        </div>
    )
}

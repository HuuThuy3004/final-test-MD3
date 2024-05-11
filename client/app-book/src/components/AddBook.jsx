import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function AddBook() {
    const [message, setMessage] = useState('');
    const [books, setBooks] = useState({
        name: '',
        description: '',
        price: ''
    });

    const handleInput = (e) => {
       setBooks({...books , [e.target.name]: e.target.e})
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:8080/api/v1/book' , {books})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>
                Add Book
                <Link to='/list'>
                    <ArrowBackIcon />
                </Link>
            </h1>
            <table>
                <tr>
                    <td>Name:</td>
                    <td>
                        <input type="text" name='name' placeholder='Enter name' onChange={handleInput} />
                    </td>
                </tr>
                <tr>
                    <td>Description:</td>
                    <td>
                        <input type="text" name='description' placeholder='Enter description' onChange={handleInput} />
                    </td>
                </tr>
                <tr>
                    <td>Price:</td>
                    <td>
                        <input type="number" name='price' placeholder='Enter price' onChange={handleInput} />
                    </td>
                </tr>
                <tr>
                    <td>
                        Create_at:
                        <br /> <b>(ex: 2024-01-02)</b>
                    </td>
                    <td>
                        <input type="text" name='create_at' placeholder='Enter creation date ' onChange={handleInput} />
                    </td>
                </tr>
                <tr>
                    <td>
                        Update_at: <br />
                        <b>(ex: 2024-01-02)</b>
                    </td>
                    <td>
                        <input type="text" name='update_at' placeholder='Enter the update date' onChange={handleInput} />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button className='btn-add' onClick={handleSubmit}>Add Book</button>
                    </td>
                </tr>
            </table>

        </div>
    )
}

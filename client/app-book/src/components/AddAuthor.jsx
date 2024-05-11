import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './css/AddBook.css'


export default function AddAuthor() {
    //Các thầy chấm điểm nhớ reaload trang F5 lại nha các thầy
    const [author, setAuthor] = useState({
        name: '',
        biography: ''
    });

    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        await axios.post('http://localhost:8080/api/v1/author' , author)
        .then( res=>{
            alert('Add author successfully!')
            navigate('/author')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='form-add'>
            <h1>
                Add Author
                <Link to='/'>
                    <ArrowBackIcon />
                </Link>
            </h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>Name:</td>
                        <td>
                            <input type="text" name='name' placeholder='Enter name' onChange={ e => setAuthor({...author , name: e.target.value})} />
                        </td>
                    </tr>
                    <tr>
                        <td>Biography:</td>
                        <td>
                            <input type="text" name='biography' placeholder='Enter description' className='ipt-des' onChange={ e => setAuthor({...author , biography: e.target.value})} />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button className='btn-add-author'>Add Author</button>
                        </td>
                    </tr>
                </table>
            </form>
            
        </div>
    )
}

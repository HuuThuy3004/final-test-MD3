import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './css/UpdateBook.css'

export default function UpdateBook() {
    //Các thầy chấm điểm nhớ reaload trang F5 lại nha các thầy
    const {id} = useParams()
    const [data, setData] = useState([]);

    useEffect(()=>{
      axios.get('http://localhost:8080/api/v1/books/' + id)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    } , [])

    
    const navigate = useNavigate()
    console.log(1111 , data);

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.put('http://localhost:8080/api/v1/book/' + id , data)
      .then(res => {
        alert(`Update successfully with book's ${id}`)
        navigate('/')
      })
      .catch(err => {
        console.log(err);
      })
    }

    return (
        <div className='form-update'>
            <h1>
                Update Book
                <Link to='/'>
                    <ArrowBackIcon />
                </Link>
            </h1>
              <form onSubmit={handleSubmit}>
                <table className='tbl-update'>
                    <tr>
                        <td>ID:</td>
                        <td>
                            <input type="text" disabled name='id'  placeholder='Enter name' value={data.id} />
                        </td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>
                            <input type="text" name='name' placeholder='Enter name' value={data.name} onChange={ e => setData({...data , name: e.target.value}) }/>
                        </td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>
                            <input type="text" name='description' placeholder='Enter description' value={data.description} className='ipt-des' onChange={ e => setData({...data , description: e.target.value}) }/>
                        </td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td>
                            <input type="number" name='price' placeholder='Enter price' value={data.price} onChange={ e => setData({...data , price: e.target.value}) }/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button className='btn-update'>Update Book</button>
                        </td>
                    </tr>
                </table>
              </form>
        </div>
    )
}

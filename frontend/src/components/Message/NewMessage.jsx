import axios from 'axios'
import { useState } from 'react'
import {Home} from '../Home/Home'

export const NewMessage = ()=> {

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        job_title: '',
        address: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('data', data)

        axios.post('https://contact-app-neha.herokuapp.com/contact/create', data)
        .then(res => console.log(res)).catch(err => console.log(err))
    }

    return (
        <>
        <Home/>

            <form onSubmit={handleSubmit} className='relative bg-slate-800 bg-opacity-70 top-24 w-full py-10 lg:py-16 md:py-14 lg:w-5/12 md:w-8/12 m-auto z-10 p-6 text-center shadow-md shadow-emerald-300 text-pink-600'>
                <input className='mb-4 h-10 px-3 py-1 text-lg rounded-sm w-72 lg:w-96 md:w-96 placeholder:text-slate-700'
                 type="text" placeholder='First Name' 
                 onChange={handleChange} name='firstName'
                /> <br/>
                <input className='mb-4 h-10 px-3 py-1 text-lg rounded-sm w-72 lg:w-96 md:w-96 placeholder:text-slate-700'
                 type="text" placeholder='Last Name' 
                 onChange={handleChange} name='lastName'
                /> <br/>
                <input className='mb-4 h-10 px-3 py-1 text-lg rounded-sm w-72 lgw-:96 md:w-96 placeholder:text-slate-700'
                 type="number" placeholder='Phone No'
                 onChange={handleChange} name='phone'
                /> <br/>
                <input className='mb-4 h-10 px-3 py-1 text-lg rounded-sm w-72 lgw-:96 md:w-96 placeholder:text-slate-700'
                 type="text" placeholder='Job Title' 
                 onChange={handleChange} name='job_title'
                /> <br/>
                <input className='mb-4 h-10 px-3 py-1 text-lg rounded-sm w-72 lgw-:96 md:w-96 placeholder:text-slate-700'
                 type="text" placeholder='City'
                 onChange={handleChange} name='address'
                /> <br/>

                <input className="bg-emerald-700 w-72 lg:w-96 md:w-96 cursor-pointer  py-2 text-white uppercase rounded-sm m-auto" type="submit" value="Create Contact" />
            </form>
        </>
    )
}
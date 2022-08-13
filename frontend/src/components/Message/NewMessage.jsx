import axios from 'axios'
import { useEffect, useState } from 'react'
import {Home} from '../Home/Home'
import { useDispatch, useSelector } from 'react-redux'
import { Loading } from '../Loading'
import { setLoading } from '../../Redux/Actions/message'

export const NewMessage = ()=> {

    const dispatch = useDispatch()
    const messageId = useSelector(state=> state.message.currentMessage)
    const singleContact = useSelector(state=> state.contact.singleContact)
    const loading = useSelector(state=> state.contact.loading)
    

    const [data, setData] = useState({
        receiver: '',
        message: ''
    })

    useEffect(()=> {
        if(messageId){
            const otp = (Math.floor(Math.random() * 100000) + 99999);
            setData({
                receiver: messageId,
                message: `Hi Your OTP is ${otp}`
            })
        }
        else {
            setData({message: "Please Choose a Contact to send Message"})
        }
        
    }, [singleContact])


    const handleSubmit = (e) => {
        dispatch(setLoading(true))
        e.preventDefault();

        axios.post('https://contact-app-neha.herokuapp.com/message/create', data)
        .then(res =>{ alert(res.data); dispatch(setLoading(false))}).catch(err => console.log(err))
    }

    return (
        <>

        {loading && <Loading/>}
        <Home/>

            <div className='relative bg-slate-800 bg-opacity-70 top-24 w-full py-10 lg:py-16 md:py-14 lg:w-5/12 md:w-8/12 m-auto z-10 p-6 text-center shadow-md shadow-emerald-300'>

                <div className='m-auto pb-2 border border-emerald-400 rounded-xl py-2 px-3 text-white flex gap-1 text-xl w-72 lg:w-96 md:w-96'>
                    <p>To:  {singleContact.firstName} </p>
                    <p>{singleContact.lastName}</p>
                </div>
                
                <div className='m-auto my-4  text-white h-10 px-3 py-1 text-lg w-72 lgw-:96 md:w-96 placeholder:text-slate-700'
                > {data.message} </div>

                <button onClick={handleSubmit} className="bg-emerald-700 w-72 lg:w-96 md:w-96 cursor-pointer hover:bg-pink-700 py-2 text-white uppercase rounded-sm m-auto" type="submit" value="Create Contact"> Send Message </button>
            </div>
        </>
    )
}
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineUser } from 'react-icons/ai'
import { ImPhone } from 'react-icons/im'
import { useState } from 'react';
import { useEffect } from 'react';
import { setLoading } from '../../Redux/Actions/contact';
import { Loading } from '../Loading';
import { Home } from '../Home/Home';
import { setCurrentMessage } from '../../Redux/Actions/message';
import { useNavigate } from 'react-router-dom';
import { getSingleContact } from '../../Redux/Actions/contact';

export const ContactDetails = () => {

   
    const loading = useSelector(state => state.contact.loading)
    const singleContact = useSelector(state => state.contact.singleContact)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [city, setCity] = useState('')

    const handleNewMessage = () => {
        dispatch(setCurrentMessage(singleContact._id))
        dispatch(getSingleContact(singleContact._id))
        navigate('/message/create')

    }  

    useEffect(() => {
        
        setCity(singleContact.address)
    }, [singleContact])

    return (
        <>

        {window.innerWidth <= 460 && <Home/>}
        
            <div className='border-l lg:h-full md:h-full h-screen py-2 md:py-0 lg:py-0 md:bg-transparent lg:bg-transparent'>
                {loading && <Loading />}
                {singleContact._id ?
                    <div className='p-2 md:w-7/12 lg:w-5/12 text-white fixed z-10'>
                        <div className=' lg:flex md:flex'>
                            <AiOutlineUser className='text-5xl' />
                            <div>
                                <div className='flex'>
                                    <p className='text-2xl lg:ml-3 md:ml-3 mt-1'>{singleContact.firstName}</p>
                                    <p className='text-2xl lg:ml-3 md:ml-3 mt-1'>{singleContact.lastName}</p>
                                </div>
                                <p className='text-lg ml-3 mt-1'>{singleContact.phone}</p>
                            </div>
                            <button onClick={handleNewMessage} className='bg-emerald-500 px-3 md:px-6 lg:px-6 py-2 md:absolute lg:absolute md:right-0 lg:right-0 hover:bg-pink-600 rounded-sm'>Send Message</button>
                        </div>

                        <div className='text-lg mt-1 mb-2'>
                            <p>Job Title: {singleContact.job_title}</p>
                            <p>Address: {singleContact.address}</p>
                        </div>
                        <div class="gmap_canvas">
                            <iframe height='250' width='100%' title='map' src={`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" ></iframe>
                            {/* <a href="https://putlocker-is.org"></a> */}
                        </div>
                    </div>

                    : <p className='w-96 opacity-60 leading-normal p-2 fixed z-10 text-6xl' >Click on a contact to see details</p>
                }
            </div>
        </>
    )
}
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineUser } from 'react-icons/ai'
import { ImPhone } from 'react-icons/im'
import { useState } from 'react';
import { useEffect } from 'react';
import { setLoading } from '../../Redux/Actions/contact';
import { Loading } from '../Loading';
import { Home } from '../Home/Home';


export const ContactDetails = () => {

   
    const loading = useSelector(state => state.contact.loading)
    const singleContact = useSelector(state => state.contact.singleContact)

    const dispatch = useDispatch()
    const [city, setCity] = useState('')

    useEffect(() => {
        dispatch(setLoading(false))
        setCity(singleContact.address)
    }, [singleContact])

    return (
        <>

        {window.innerWidth <= 460 && <Home/>}
        
            <div className=' lg:h-full md:h-full h-screen py-2 md:py-0 lg:py-0 md:bg-transparent lg:bg-transparent'>
                {loading && <Loading />}
                {singleContact._id ?
                    <div className='border-l p-2 text-white fixed z-10'>
                        <div className='flex'>
                            <AiOutlineUser className='text-5xl' />
                            <div>
                                <div className='flex'>
                                    <p className='text-2xl ml-3 mt-1'>{singleContact.firstName}</p>
                                    <p className='text-2xl ml-3 mt-1'>{singleContact.lastName}</p>
                                </div>
                                <p className='text-lg ml-3 mt-1'>{singleContact.phone}</p>
                            </div>
                        </div>

                        <div className='text-lg mt-1 mb-2'>
                            <p>Job Title: {singleContact.job_title}</p>
                            <p>Address: {singleContact.address}</p>
                        </div>
                        <div class="gmap_canvas">
                            <iframe height='250' width='450' title='map' src={`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" ></iframe>
                            {/* <a href="https://putlocker-is.org"></a> */}
                        </div>
                    </div>

                    : <p className='border-l w-96 opacity-60 leading-normal p-2 fixed z-10 text-7xl' >Click on a contact to see details</p>
                }
            </div>
        </>
    )
}
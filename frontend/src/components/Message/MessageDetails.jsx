import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineUser } from 'react-icons/ai'
import { useEffect } from 'react';
import { setLoading } from '../../Redux/Actions/contact';
import { Loading } from '../Loading';
import { Home } from '../Home/Home';


export const MessageDetails = () => {

   const dispatch = useDispatch()
    const loading = useSelector(state => state.message.loading)
    const singleMessage = useSelector(state => state.message.singleMessage)


   

    return (
        <>

        {window.innerWidth <= 460 && <Home/>}
        
            <div className='lg:h-full md:h-full h-full w-full py-2 md:py-0 lg:py-0 md:bg-transparent lg:bg-transparent'>
                {loading && <Loading />}
                {singleMessage._id ?
                    <div className='m-auto p-2 flex flex-col justify-between text-white fixed z-10'>
                        <div className='flex gap-1'>
                            <AiOutlineUser className='text-5xl' />
                            <p className='text-2xl ml-3 mt-1'>{singleMessage.receiver.firstName}</p>
                            <p className='text-2xl ml-3 mt-1'>{singleMessage.receiver.lastName}</p>
                        </div>
                        <p className='ml-16 text-lg'>+91 {singleMessage.receiver.phone}</p>

                        <div className='my-2 text-lg'>
                            <p>Job Title: {singleMessage.receiver.address}</p>
                            <p>Address: {singleMessage.receiver.address}</p>
                        </div>
                        <div className='text-lg mt-1 mb-2'>
                            <p>Message sent: {singleMessage.message}</p>
                        </div>
                        
                    </div>

                    : <p className='w-96 opacity-60 leading-normal p-2 fixed z-10 text-6xl' >Click on a Message to see details</p>
                }
            </div>
        </>
    )
}
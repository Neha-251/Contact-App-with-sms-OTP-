import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineUser } from 'react-icons/ai'
import { useEffect } from 'react';
import { setLoading } from '../../Redux/Actions/contact';
import { Loading } from '../Loading';
import { Home } from '../Home/Home';


export const MessageDetails = () => {

   
    const loading = useSelector(state => state.message.loading)
    const singleMessage = useSelector(state => state.message.singleMessage)

    const dispatch = useDispatch()

   

    return (
        <>

        {window.innerWidth <= 460 && <Home/>}
        
            <div className='lg:h-full md:h-full h-full w-full py-2 md:py-0 lg:py-0 md:bg-transparent lg:bg-transparent'>
                {loading && <Loading />}
                {singleMessage._id ?
                    <div className=' p-2 flex flex-col justify-between text-white fixed z-10'>
                        <div className='flex '>
                            <AiOutlineUser className='text-5xl' />
                            <p className='text-lg ml-3 mt-1'>{singleMessage._id}</p>
                        </div>

                        <div className='text-lg mt-1 mb-2'>
                            <p>Message sent: {singleMessage.messsage}</p>
                        </div>
                        
                    </div>

                    : <p className='w-96 opacity-60 leading-normal p-2 fixed z-10 text-6xl' >Click on a contact to see details</p>
                }
            </div>
        </>
    )
}
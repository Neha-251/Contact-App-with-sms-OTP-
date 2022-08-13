import { TbMessages } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import {useLocation} from 'react-router-dom'

export const Navbar = () => {

    const location = useLocation();


    return (
        <>

            <div className="flex z-20 bg-slate-800 md:bg-transparent  lg:bg-transparent  justify-between md:justify-between lg:justify-between px-1 md:px-20 lg:px-20 py-1 md:py-2 lg:py-2 fixed top-0 left-0 w-screen text-white">

                <div className='text-center rounded-full bg-pink-700 p-1'>
                    <TbMessages className='text-3xl text-emerald-300' /></div>
                <div className='flex justify-evenly p-1 lg:w-2/4 md:w-2/4 w-full'>
                    <Link to='/'>
                        <div className='group'>
                        <p className={location.pathname==='/'? 'text-pink-600 cursor-pointer' :'cursor-pointer group-hover:text-pink-500'}>
                            Contacts</p> 
                        <div className={location.pathname==='/'? 'bg-pink-600 m-auto transition-transform group-hover:scale-x-150 group-hover:ease-linear delay-200 duration-700 h-0.5 w-6' : 'bg-white m-auto transition-transform group-hover:scale-x-150 group-hover:ease-linear delay-200 duration-700 h-0.5 w-6'}></div>
                        </div>
                            </Link>
                    <Link to='/contact/create'>
                        <div className='group'>
                        <p className={location.pathname==='/contact/create'? 'text-pink-600 cursor-pointer' :'cursor-pointer group-hover:text-pink-500'}>
                            Create Contact</p> 
                        <div className={location.pathname==='/contact/create'? 'bg-pink-600 m-auto transition-transform group-hover:scale-x-150 group-hover:ease-linear delay-200 duration-700 h-0.5 w-6' : 'bg-white m-auto transition-transform group-hover:scale-x-150 group-hover:ease-linear delay-200 duration-700 h-0.5 w-6'}></div>
                        </div>
                    </Link>
                    <Link to='/message'>
                        <div className='group'>
                        <p className={location.pathname==='/message'? 'text-pink-600 cursor-pointer' :'cursor-pointer group-hover:text-pink-500'}>
                            Messages</p> 
                            <div className={location.pathname==='/message'? 'bg-pink-600 m-auto transition-transform group-hover:scale-x-150 group-hover:ease-linear delay-200 duration-700 h-0.5 w-6' : 'bg-white m-auto transition-transform group-hover:scale-x-150 group-hover:ease-linear delay-200 duration-700 h-0.5 w-6'}></div>
                        </div>
                    </Link>
                </div>

            </div>
            <div className='w-full h-10 lg:hidden md:hidden'></div>
        </>
    )
}
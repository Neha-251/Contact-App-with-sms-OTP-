import { TbMessages } from 'react-icons/tb'
import { Home } from './Home/Home'

export const Navbar = () => {
    return (
        <>
        
        <div className="flex z-20 bg-slate-800 md:bg-transparent  lg:bg-transparent  justify-between md:justify-between lg:justify-between px-1 md:px-20 lg:px-20 py-1 md:py-2 lg:py-2 fixed bg-transparent top-0 left-0 w-screen text-white">

            <div className='text-center rounded-full bg-pink-700 p-1'>
                <TbMessages className='text-3xl text-emerald-300' /></div>
            <div className='flex justify-evenly p-1 lg:w-2/4 md:w-2/4 w-3/4'>
                <p className='hover:text-pink-600 cursor-pointer'>Home</p>
                <p className='hover:text-pink-600 cursor-pointer'>Contacts</p>
                <p className='hover:text-pink-600 cursor-pointer'>Messages</p>
            </div>

        </div>
        <div className='w-full h-10 lg:hidden md:hidden'></div>
        </>
    )
}
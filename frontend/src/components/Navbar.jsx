import { TbMessages } from 'react-icons/tb'
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <>

            <div className="flex z-20 bg-slate-800 md:bg-transparent  lg:bg-transparent  justify-between md:justify-between lg:justify-between px-1 md:px-20 lg:px-20 py-1 md:py-2 lg:py-2 fixed top-0 left-0 w-screen text-white">

                <div className='text-center rounded-full bg-pink-700 p-1'>
                    <TbMessages className='text-3xl text-emerald-300' /></div>
                <div className='flex justify-evenly p-1 lg:w-2/4 md:w-2/4 w-full'>
                    <Link to='/'><p className='hover:text-pink-600 cursor-pointer'>Contacts</p></Link>
                    <Link to='/contact/create'><p className='hover:text-pink-600 cursor-pointer'>Create Contact</p></Link>
                    <Link to='/message'><p className='hover:text-pink-600 cursor-pointer'>Messages</p></Link>
                </div>

            </div>
            <div className='w-full h-10 lg:hidden md:hidden'></div>
        </>
    )
}
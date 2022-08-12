import { TbMessages } from 'react-icons/tb'

export const Navbar = () => {
    return (
        <div className="flex z-10 justify-between px-20 py-2 fixed bg-transparent top-0 left-0 w-screen text-white">

            <div className='text-center rounded-full bg-pink-700 p-1'>
                <TbMessages className='text-3xl text-emerald-300' /></div>
            <div className='flex justify-evenly p-1 w-2/4'>
                <p className='hover:text-pink-600 cursor-pointer'>Home</p>
                <p className='hover:text-pink-600 cursor-pointer'>Contacts</p>
                <p className='hover:text-pink-600 cursor-pointer'>Messages</p>
            </div>

        </div>
    )
}
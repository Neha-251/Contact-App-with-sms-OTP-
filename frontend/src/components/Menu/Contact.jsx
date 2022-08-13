import { useDispatch, useSelector } from 'react-redux';
import { Home } from "../Home/Home";
import { ContactList } from "./ContactList";
import { ContactDetails } from "./ContactDetails";

export const Contact = () => {
    const singleContact = useSelector(state => state.contact.singleContact)

    return (
        <>

        <Home/>

         <div className='h-screen'>
            <div className="relative overflow-y-scroll px-4 py-12 md:py-4 lg:py-4 z-10 tracking-wider flex text-white w-full lg:w-8/12 md:w-full m-auto lg:h-4/6 full md:h-4/6 p-2 top-0 md:top-20 lg:top-28 bg-slate-800 opacity-90">
               <ContactList />
               <div className="hidden md:block lg:block "><ContactDetails/></div>
               
            </div>
            </div>
        </>
    )
}
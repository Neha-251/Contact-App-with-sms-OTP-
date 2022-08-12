import { Home } from "../Home/Home";
import { ContactList } from "./ContactList";
import { ContactDetails } from "./ContactDetails";

export const Contact = () => {


    return (
        <>

        <Home/>

         <div className='h-screen'>
            <div className="relative overflow-y-scroll z-10 tracking-wider flex text-white w-2/4 m-auto h-4/6 p-2 top-28 bg-slate-800 opacity-90">
               <ContactList />
               <ContactDetails/>
            </div>
            </div>
        </>
    )
}
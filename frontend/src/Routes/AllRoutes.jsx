import { Contact } from "../components/Contact/Contact"
import { Home } from "../components/Home/Home"
import {Routes, Route} from 'react-router-dom'
import { Navbar } from "../components/Navbar"
import { ContactDetails } from "../components/Contact/ContactDetails"
import { NewContact } from "../components/Contact/newContact"
import { NewMessage } from "../components/Message/NewMessage"
import { Message } from "../components/Message/Message"
import { MessageDetails } from "../components/Message/MessageDetails"

export const AllRoutes = () => {


    return (
        <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/contact/:id' element={<ContactDetails/>} />
            <Route path='/contact/create' element={<NewContact/>} />
            <Route path='/message' element={<Message/>} />
            <Route path='/message/:id' element={<MessageDetails/>} />
            <Route path='/message/create' element={<NewMessage/>} />
        </Routes>
        </>
    )
}
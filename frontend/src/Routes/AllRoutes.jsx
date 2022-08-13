import { Contact } from "../components/Menu/Contact"
import { Home } from "../components/Home/Home"
import {Routes, Route} from 'react-router-dom'
import { Navbar } from "../components/Navbar"
import { ContactDetails } from "../components/Menu/ContactDetails"

export const AllRoutes = () => {


    return (
        <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/contact/:id' element={<ContactDetails/>} />
        </Routes>
        </>
    )
}
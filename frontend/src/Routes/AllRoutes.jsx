import { Contact } from "../components/Menu/Contact"
import { Home } from "../components/Home/Home"
import {Routes, Route} from 'react-router-dom'
import { Navbar } from "../components/Navbar"

export const AllRoutes = () => {


    return (
        <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
        </>
    )
}
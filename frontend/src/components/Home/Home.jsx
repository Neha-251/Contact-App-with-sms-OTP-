import { useEffect } from 'react';
import { useState } from 'react';
import nightsky from '../Images/nightsky.jpg';
import contact from '../Images/contact.jpg';
import hills from '../Images/hills.jpg';
import aurora from '../Images/aurora.jpg';
import waterhill from '../Images/waterhill.jpg';
import { useRef } from 'react';

export const Home = () => {


    const [currImg, setCurrImg] = useState(0);
    const [arrImg] = useState([hills, aurora, waterhill]);

    const imgRef = useRef(0)

    useEffect(()=> {
        imgRef.current = setInterval(()=> {
            if(currImg < 2){setCurrImg(prev=> prev+1)}
            else {setCurrImg(1)}
        }, 7000)

        return ()=> clearInterval(imgRef.current)
    })

    return (
        <div>
            <img  src={arrImg[currImg]} className='h-screen fixed z-0 w-screen transition-opacity bg-slate-500' alt='bacImg' />
        </div>
    )
}
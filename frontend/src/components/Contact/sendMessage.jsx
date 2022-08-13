import { AiOutlineMessage } from 'react-icons/ai'
import { setCurrentMessage } from '../../Redux/Actions/message';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSingleContact } from '../../Redux/Actions/contact';



export const SendMessage = ({id}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleNewMessage = (id) => {
        console.log('id', id)
        dispatch(setCurrentMessage(id))
        dispatch(getSingleContact(id))
        navigate('/message/create')

    } 

    return (
        <div className="">
            <AiOutlineMessage onClick={()=> handleNewMessage(id)} className="mt-1 hover:text-white text-emerald-300 text-2xl" />
        </div>
    )
}
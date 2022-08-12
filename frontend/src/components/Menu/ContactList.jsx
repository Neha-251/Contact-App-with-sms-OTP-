import { useCallback, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getAllContact, getSingleContact, setContactLoading, setLoading } from "../../Redux/Actions/contact";
import { Home } from "../Home/Home";
import {AiOutlineUser} from 'react-icons/ai';
import { debounce } from "lodash";

export const ContactList = () => {

    const dispatch = useDispatch();
    const allContacts = useSelector(state => state.contact.contacts);
    const singleContact = useSelector(state => state.contact.singleContact);
    const contactLoading = useSelector(state => state.contact.contactLoadind)
    const totalPage = useSelector(state => state.contact.totalPage);

    const [page, setPage] = useState(1);
    const [pagesize, setPageSize] = useState(10);
   

    
    useEffect(() => {
        dispatch(getAllContact(page, pagesize))
    }, [page, pagesize])

    const handleClick = (id) => {
        dispatch(setLoading(true))
        dispatch(getSingleContact(id))
    }

    const observer = useRef()

    const handlePage = debounce(() => {
        dispatch(setContactLoading(true));
        setPage(prev => prev + 1)

    }, 5000)
    
    const lastUserRef = useCallback(
        (node) => {
            if (contactLoading) {
                return;
            }
            if (observer.current) {
                observer.current.disconnect();
            }

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && totalPage > page) {
                    console.log('entries[0].isIntersecting', entries[0].isIntersecting)
                    handlePage()
                }
            });
            if (node) {
                observer.current.observe(node);
            }
        },
        [contactLoading, allContacts]
    )



  return (
    <>
    <div className='pr-6'>
                {
                    allContacts.map((el, ind) => {
                        if(allContacts.length === ind+3){
                            return (
                                <div ref={lastUserRef} className={ el._id===singleContact._id? "p-2 bg-pink-700 rounded-lg cursor-pointer" :"p-2 cursor-pointer"} key={el._id} onClick={()=> handleClick(el._id)}>
                                    <div>
                                        <div className="flex gap-2">
                                            <AiOutlineUser className="mt-1 text-xl"/>
                                            <p className="text-lg">{el.firstName}</p>
                                            <p className="text-lg">{el.lastName}</p>
                                        </div>
                                        <p className='text-sm'>Phone: {el.phone}</p>
                                    </div>
                                    <div>
    
                                    </div>
    
                                </div>
                            )
                        } else {
                            return (
                                <div className={ el._id===singleContact._id? "p-2 bg-pink-700 rounded-lg cursor-pointer" :"p-2 cursor-pointer"} key={el._id} onClick={()=> handleClick(el._id)}>
                                    <div>
                                        <div className="flex gap-2">
                                            <AiOutlineUser className="mt-1 text-xl"/>
                                            <p className="text-lg">{el.firstName}</p>
                                            <p className="text-lg">{el.lastName}</p>
                                        </div>
                                        <p className='text-sm'>Phone: {el.phone}</p>
                                    </div>
                                    <div>
    
                                    </div>
    
                                </div>
                            )
                        }
                        
                    })
                }
                </div>
    </>
  )
}
import { useCallback, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getAllContact, getSingleContact, setContactLoading, setLoading } from "../../Redux/Actions/contact";
import { Home } from "../Home/Home";
import { AiOutlineUser } from 'react-icons/ai';
import { debounce } from "lodash";
import { useNavigate } from 'react-router-dom';
import { AiOutlineMessage } from 'react-icons/ai'
import { Loading } from "../Loading";

export const ContactList = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const loading = useSelector(state => state.contact.loading)
    const allContacts = useSelector(state => state.contact.contacts);
    const singleContact = useSelector(state => state.contact.singleContact);
    const contactLoading = useSelector(state => state.contact.contactLoadind)
    const totalPage = useSelector(state => state.contact.totalPage);

    const [page, setPage] = useState(1);
    const [pagesize, setPageSize] = useState(20);

    useEffect(() => {
        dispatch(getAllContact(page, pagesize))
    }, [page, pagesize])

    const handleClick = (id) => {
        dispatch(setLoading(true))
        dispatch(getSingleContact(id))
        window.innerWidth <= 760 && navigate(`/contact/${id}`)
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
        {loading && <Loading/>}
            <div className='pr-6 lg:w-4/12 md:w-4/12 '>
                {
                    allContacts.map((el, ind) => {
                        if (allContacts.length === ind + 7) {
                            return (
                                <div ref={lastUserRef} className={el._id === singleContact._id ? "p-2 bg-pink-700 rounded-lg cursor-pointer justify-between flex" : "p-2 justify-between flex cursor-pointer rounded-lg hover:shadow-sm hover:shadow-emerald-400"} key={el._id} onClick={() => handleClick(el._id)}>
                                    <div>
                                        <div className="flex gap-2">
                                            <AiOutlineUser className="mt-1 text-xl" />
                                            <p className="text-lg">{el.firstName}</p>
                                            <p className="text-lg">{el.lastName}</p>
                                        </div>
                                        <p className='text-sm'>Phone: {el.phone}</p>
                                    </div>
                                    <div className="">
                                        <AiOutlineMessage className="mt-1 hover:text-white text-emerald-300 text-2xl" />
                                    </div>

                                </div>
                            )
                        } else {
                            return (
                                <div className={el._id === singleContact._id ? "p-2 justify-between bg-pink-700 rounded-lg cursor-pointer flex" : "p-2 flex justify-between cursor-pointer rounded-lg hover:shadow-sm hover:shadow-emerald-400"} key={el._id} onClick={() => handleClick(el._id)}>
                                    <div>
                                        <div className="flex gap-2">
                                            <AiOutlineUser className="mt-1 text-xl" />
                                            <p className="text-lg">{el.firstName}</p>
                                            <p className="text-lg">{el.lastName}</p>
                                        </div>
                                        <p className='text-sm'>Phone: {el.phone}</p>
                                    </div>
                                    <div>
                                        <AiOutlineMessage className="mt-1 hover:text-white text-emerald-300 text-2xl" />
                                    </div>

                                </div>
                            )
                        }
                         

                    })
                   
                }
                 {page < totalPage && <div className='text-center text-pink-600 animate-bounce' >Loading...</div>}
            </div>
        </>
    )
}
import { useCallback, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getAllMessage, getSingleMessage, setMessageLoading, setLoading } from "../../Redux/Actions/message";
import { Home } from "../Home/Home";
import { AiOutlineUser } from 'react-icons/ai';
import { debounce } from "lodash";
import { useNavigate } from 'react-router-dom';
import { AiOutlineMessage } from 'react-icons/ai'
import { Loading } from "../Loading";

export const MessageList = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const allMessages = useSelector(state => state.message.messages);

    const loading = useSelector(state => state.message.loading);
    const singleMessage = useSelector(state => state.message.singleMessage);
    const messageLoading = useSelector(state => state.message.messageLoadind)
    const totalPage = useSelector(state => state.message.totalPage);

    const [page, setPage] = useState(1);
    const [pagesize, setPageSize] = useState(20);



    useEffect(() => {
        dispatch(getAllMessage(page, pagesize))
    }, [page, pagesize])

    const handleClick = (id) => {
        dispatch(setLoading(true))
        dispatch(getSingleMessage(id))
        window.innerWidth <= 760 && navigate(`/message/${id}`)
    }

    const observer = useRef()

    const handlePage = debounce(() => {
        dispatch(setMessageLoading(true));
        setPage(prev => prev + 1)

    }, 5000)

    const lastUserRef = useCallback(
        (node) => {
            if (messageLoading) {
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
        [messageLoading, allMessages]
    )



    return (
        <>

            {loading && <Loading />}
            <div className='pr-6 border-r lg:w-4/12 md:w-4/12'>
                {
                    allMessages.map((el, ind) => {
                        if (allMessages.length === ind + 7) {
                            return (
                                <div ref={lastUserRef} className={el._id === singleMessage._id ? "p-2 bg-pink-700 rounded-lg cursor-pointer justify-between flex" : "p-2 justify-between flex cursor-pointer rounded-lg hover:shadow-sm hover:shadow-emerald-400"} key={el._id} onClick={() => handleClick(el._id)}>
                                    <div>
                                        <div className="flex gap-1">
                                            <AiOutlineUser className="mt-1 text-xl" />
                                            <p className='mt-0.5 text-xl'>{el.receiver.firstName}</p>
                                            <p className='mt-0.5 text-xl'>{el.receiver.lastName}</p>
                                        </div>
                                    </div>
                                    

                                </div>
                            )
                        } else {
                            return (
                                <div className={el._id === singleMessage._id ? "p-2 justify-between bg-pink-700 rounded-lg cursor-pointer flex" : "p-2 flex justify-between cursor-pointer rounded-lg hover:shadow-sm hover:shadow-emerald-400"} key={el._id} onClick={() => handleClick(el._id)}>
                                    <div>
                                        <div className="flex gap-1">
                                            <AiOutlineUser className="mt text-2xl" />
                                            <p className='mt-0.5 text-xl'>{el.receiver.firstName}</p>
                                            <p className='mt-0.5 text-xl'>{el.receiver.lastName}</p>
                                        </div>
                                        <div className="overflow-hidden"><p className="text-sm text-slate-400">{el.message}</p></div>
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
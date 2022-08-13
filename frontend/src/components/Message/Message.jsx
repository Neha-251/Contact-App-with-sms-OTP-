import { Home } from "../Home/Home";
import { MessageList } from "./MessageList";
import { MessageDetails } from "./MessageDetails";

export const Message = () => {

    return (
        <>

            <Home />

            <div className='h-screen'>
                <div className="relative overflow-y-scroll px-4 py-12 md:py-4 lg:py-4 z-10 tracking-wider md:flex lg:flex text-white w-full lg:w-8/12 md:w-full m-auto lg:h-4/6 full md:h-4/6 p-2 top-0 md:top-20 lg:top-28 bg-slate-800 opacity-90">
                    <MessageList />
                   { window.innerWidth >= 760 && <div><MessageDetails /></div>}
                </div>
            </div>
        </>
    )
}
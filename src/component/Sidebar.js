import { AiOutlineClockCircle, AiOutlineLike } from "react-icons/ai";
import { GoHome, GoHistory, GoVideo } from "react-icons/go";
import { PiVideo } from "react-icons/pi";
import { MdOutlineVideoLibrary } from "react-icons/md";
// import { NavLink } from "react-router-dom";
const Sidebar = () => {
    return (
        <>
            <div className='sidebar_item' id='home'>
                {/* <NavLink to='/'> */}
                <GoHome className='icon' />
                <span>Home</span>
                {/* </NavLink> */}
            </div>
            <div className='sidebar_item' id='kenhdangky'>
                <PiVideo className='icon' />
                <span>Kênh đăng ký</span>
            </div>
            <div className='sidebar_item' id='thuvien'>
                <MdOutlineVideoLibrary className='icon' />
                <span>Thư viện</span>
            </div>
            <div className='sidebar_item' id='videodaxem'>
                <GoHistory className='icon' />
                <span>Video đã xem</span>
            </div>
            <div className='sidebar_item' id='videocuaban'>
                <GoVideo className='icon' />
                <span>Video của bạn</span>
            </div>
            <div className='sidebar_item' id='xemsau'>
                <AiOutlineClockCircle className='icon' />
                <span>Xem sau</span>
            </div>
            <div className='sidebar_item' id='videodathich'>
                <AiOutlineLike className='icon' />
                <span>Video đã thích</span>
            </div>
        </>
    )
}

export default Sidebar
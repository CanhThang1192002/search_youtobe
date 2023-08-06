import { AiOutlineSearch } from "react-icons/ai";
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from './Sidebar';
import Avata from "../assets/avata.jpg"
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiVideoPlus } from "react-icons/bi";
import {
    Outlet
} from "react-router-dom";
const Search = (props) => {
    const setQuery = props.setQuery;
    const search = props.search;
    const [searchText, setSearchText] = useState('');
    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('collapsed');
    }
    return (
        <div className="App">
            <header className="App-header">
                <GiHamburgerMenu className='GiHamburgerMenu' onClick={() => showSidebar()} />
                <div className='search'>
                    <input type="text" placeholder="search" value={searchText} onChange={(e) => { setQuery(e.target.value); setSearchText(e.target.value) }} />
                    <span className='delete_query' onClick={() => { setQuery(''); setSearchText('') }}> X </span>
                    <AiOutlineSearch className='AiOutlineSearch' onClick={() => search()} />
                </div>

                <IoIosNotificationsOutline className='IoIosNotificationsOutline' />
                <BiVideoPlus className='BiVideoPlus' />
                <img src={Avata} className="avata" />
            </header>

            <div className='body'>
                <div className='sidebar' >
                    <Sidebar />
                </div>
                <div className='App-content'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Search;

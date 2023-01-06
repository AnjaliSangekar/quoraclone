import '../App.css'; 
import React, { useState } from 'react';  //useContext
import AddQuestion from './addQuestion';
import HomeIcon from '@mui/icons-material/Home';
import MarginIcon from '@mui/icons-material/Margin';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { SearchFilterValue } from './context/SearchFilter';

function NavBar() {
    const [openQues, SetOpenQues] = useState(false);
    

    return (
        <>
            <header>
                <nav className='d-flex justify-content-between'>
                    <div className='logo'>
                        <a href='/' className='text-decoration-none'>
                            <img src='../quora.png'/>
                        </a>
                    </div>
                    <div className='navitems d-flex justify-content-between align-items-center'>
                        <div className='navitem'>
                            <a href='/' className='text-decoration-none text-dark p-2'><HomeIcon /></a>
                        </div>
                        <div className='navitem'>
                            <a href='/' className='text-decoration-none text-dark p-2'><MarginIcon /></a>
                        </div>
                        <div className='navitem'>
                            <a href='/' className='text-decoration-none text-dark p-2'><BorderColorIcon /></a>
                        </div>
                        <div className='navitem'>
                            <a href='/' className='text-decoration-none text-dark p-2'><FamilyRestroomIcon /></a>
                        </div>
                        <div className='navitem'>
                            <a href='/' className='text-decoration-none text-dark p-2'><NotificationsIcon /></a>
                        </div>
                        <div className='navitem search p-1 d-flex'>
                            <button className='searchBtn'><SearchIcon /></button>
                            <input type='text' placeholder='Search..'/>
                        </div>
                        <div className='navitem try'>
                            <button>Try Quora+</button>
                        </div>
                        <div className='navitem nav-btn'>
                            <button><AccountCircleIcon /></button>
                        </div>
                        <div className='navitem nav-btn'>
                            <button><LanguageIcon /></button>
                        </div>
                        <div className='addQues'>
                            <button className='text-decoration-none text-white' onClick={() => SetOpenQues(true)}>Add a question</button>
                            <button className='text-decoration-none text-white'><ArrowDropDownIcon /></button>
                        </div>
                    </div>
                </nav>
            </header>
            <div className='popUpWrap'>
                <AddQuestion trigger={openQues} setTrigger={SetOpenQues} />
            </div>
        </>
    )
}

export default NavBar

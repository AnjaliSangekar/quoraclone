import React, { useState, AddQuestion } from 'react';
import './header.css';
import { Link } from "react-router-dom";

import { AiOutlineHome, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { RiPagesLine } from 'react-icons/ri';
import { MdFamilyRestroom, MdLanguage } from 'react-icons/md';
import { IoNotificationsOutline } from 'react-icons/io5';

export const Header = () => {
    const [openQues, SetOpenQues] = useState(false);

    return (
        <>
        <header> 
            <div className="header-container">
                <div className="logo">
                    <Link to="/">
                      <img src="./images/Quora-Logo.png"/>
                    </Link>
                    <div className="navbar">
                      <Link to="/"><AiOutlineHome size={27} /></Link>
                      <Link to="/"><RiPagesLine size={27} /></Link>
                      <Link to="/"><BsPencilSquare size={27} /></Link>
                      <Link to="/"><MdFamilyRestroom size={27} /></Link>
                      <Link to="/"><IoNotificationsOutline size={27} /></Link>
                    </div>                     
                </div>
                <div className="search-bar">
                    <div className="search">
                        <input type="text" placeholder="search..." />
                        <AiOutlineSearch className="search-icon"/>
                    </div>  
                    <div className='try'>
                        <button className='btn'>Try Quora+</button>
                    </div>
                </div>                      
                <div className="nav">
                    <div>
                        <AiOutlineSearch size={25} className="search-icon-nav"/>  
                        <Link to="/anju"><AiOutlineUser size={27} /></Link>
                        <Link to="/anju"><MdLanguage size={27} /></Link>     
                    </div>
                </div>
                <div className='addQues'>
                    <button className='text-decoration-none text-white' onClick={() => SetOpenQues(true)}>Add a question</button>
                    {/* <button className='text-decoration-none text-white'><ArrowDropDownIcon /></button> */}
                </div>
            </div>

        </header>
        <div className='popUpWrap'>
             <AddQuestion trigger={openQues} setTrigger={SetOpenQues} />
        </div>
        </>
        
           
    )
}
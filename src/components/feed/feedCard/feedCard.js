import React from "react";

import { AiOutlineComment } from "react-icons/ai";
import { MdMoreHoriz } from 'react-icons/md';
import { BsArrowRepeat } from "react-icons/bs";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import './feedCard.css';


export const FeedCard = (props) => {
    // props = {data: [{}]}
    const {data} = props; 
    return (
     
        <div className="feed-card">
            <div className="top">
                <div className="profile">
                    <div className="profile-icon">
                        <img src="./images/profile1.png" />  
                    </div>
                    <div className="profile-detail">
                        <div className="profile-name">
                            {data.name}
                        </div>
                        <div className="profile-profession">
                            {data.profession}
                        </div>
                         <div className="profile-day">
                            {data.day}
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="que">
                <p> {data.question} </p>
            </div>
            <div className="ans">
                <p> {data.answer} </p>
            </div>
           
            <div className="mid">
                <img src={data.image} />
            </div>
            <div className="bottom">
                <div className="reaction">
                    <button>
                    <ImArrowUp className="reaction-icon" size={25} />
                    {data.votes}
                    <ImArrowDown className="reaction-icon" size={25} />
                    </button>
                    <button><AiOutlineComment className="reaction-icon" size={25} /></button>
                    <button><BsArrowRepeat className="reaction-icon" size={25} /></button>
                    <MdMoreHoriz className="profile-more-menu" />
                </div>
                
            </div>
        </div>
    )
}
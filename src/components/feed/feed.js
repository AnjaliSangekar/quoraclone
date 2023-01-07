import React from "react";
import { feed } from "../../mockdata";
import './feed.css';
import { FeedCard } from "./feedCard/feedCard";
// import { SearchComp } from "./searchComp";
import { FaUserCircle } from "react-icons/fa";


export const Feed = () => {
    return (
        
        <div className="feed-container">

            <div className='main'>
            <div className='searchComp'>
                <div className='searchTop'>
                    <FaUserCircle size={29} />
                    <button className='inputBtn'>What do you want to ask or share</button>
                </div>
                <div className='searchBottom d-flex justify-content-between mt-1'>
                    <button>Ask</button>
                    <span className='divider'></span>
                    <button>Answer</button>
                    <span className='divider'></span>
                    <button>post</button>
                </div>
            </div>
            </div>    
    
            {
                feed.map ((feedCard, index) => {
                    return (  
                        <FeedCard key={index} data={feedCard} />           
                     )
                 })
            }
        </div>
    )
}
import React, { useState } from "react";
import './profile.css';
import { useParams } from "react-router-dom";

import { profile } from "../../mockdata";
// import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";



export const Profile = (props) => {
    const [activeSection, setSection] = useState('post');
    const [toggleModal, setModal] = useState(false);
    const [modalData, setModalData] = useState('');
    const {userName} = useParams(); // {userName: anjali} => {userName}

    const openModal = (url) => {
        setModalData(url);
        setModal(true);
    }

    return(
        <div className="profile-container">
            <div className="profile-top">
                <div className="profile-image-wrapper">
                    <div className="profile-image" style={{'backgroundImage': 'url(./images/icon.png)'}} />
                </div>
                <div className="profile-intro">
                    <div className="profile-username">
                        {profile.userName}
                    </div>
                    <div className="profile-desc">
                           {profile.about}
                        </div>
                    <div className="profile-follow">
                        <div className="count-warpper">
                            <span className="count"> {profile.followersCount} </span> followers
                        </div>
                        <div className="count-warpper">
                            <span className="count"> {profile.followingCount} </span> following
                        </div>
                    </div>
                    <div className="profile-about">
                        <div className="profile-desc">
                           {profile.desc}
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-part"></div>
            <div className="profile-bottom">
                <div className="profile-tag">
                    <div className={`${activeSection === 'profile' && 'active-tag'} profile`} onClick={() => setSection('profile')}>
                       Profile
                    </div>
                    <div className={`${activeSection === 'answer' && 'active-tag'} answer`} onClick={() => setSection('answer')}>
                       Answer
                    </div>
                    <div className={`${activeSection === 'question' && 'active-tag'} question`} onClick={() => setSection('question')}>
                       Question
                    </div>
                    <div className={`${activeSection === 'post' && 'active-tag'} post`} onClick={() => setSection('post')}>
                       Posts
                    </div>
                    <div className={`${activeSection === 'edits' && 'active-tag'} edits`} onClick={() => setSection('edits')}>
                       Edits
                    </div>
                    <div className={`${activeSection === 'tagged' && 'active-tag'} tagged`} onClick={() => setSection('tagged')}>
                       TAGGED
                    </div>
                </div>
            </div>
            <div className="profile-section">
                {
                    activeSection === "profile" &&
                    <div className="post-card-wrapper">
                        {profile.profile}
                    </div>
                }
                {
                    activeSection === "answer" &&
                    <div className="post-card-wrapper">
                        {profile.answer}
                    </div>
                }
                {
                    activeSection === "question" &&
                    <div className="post-card-wrapper">
                        {profile.question}
                    </div>
                }
                {
                    activeSection === "posts" &&
                    <div className="post-card-wrapper">
                        {profile.posts}
                    </div>
                }
                {
                    activeSection === "edits" &&
                    <div className="post-card-wrapper">
                        {profile.edits}
                    </div>
                }
            </div>

            {
                toggleModal &&
                <div className="modal">
                    <div className="modal-card">
                      <AiOutlineCloseCircle size={20} className="close-modal" onClick={() => setModal(false)} />
                       {modalData}
                    </div>
                </div>
            }
            
        </div>
    )
}
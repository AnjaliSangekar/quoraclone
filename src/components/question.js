import React, { useContext } from 'react';
// import Filter from './homeLeftBar';
import datas from './json/questions.json';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CachedIcon from '@mui/icons-material/Cached';
import { FilterValue } from './context/QuestionFilter.js';

function Question() {
    const value = useContext(FilterValue);
    const getFilterData = value.getFilter.toLowerCase();
    const getdata = datas.filter((data) =>
        data.catogory.toLowerCase().includes(getFilterData)).map(data => {
            return (
            <div className='quesBox rounded bg-white mt-2 mb-2 p-2 border'>
                <div className='d-flex'>
                    <div className='profile m-1'>
                        <img src={data.profile} alt='user profile' />
                    </div>
                    <div className='name'>
                        <div>
                            <h6>{data.name}</h6>
                            <p>{data.workedAt}</p>
                        </div>
                        <div className='d-flex quesTopBtn'>
                            <button className='name'>...</button>
                            <button>x</button>
                        </div>
                    </div>
                </div>
                <h4>{data.title}</h4>
                <p>{data.body}</p>
                <img src={data.img} className='quesImg' alt='img error' />

                <div className='contain'>
                    <div className='likesetup d-flex align-items-center'>
                        <div className='mx-2'>
                            <button className='setitems d-flex align-items-center btn'>
                                <ThumbUpIcon />
                                <p className='m-1'>{data.like}</p>
                            </button>
                        </div>
                        <span className='likedivider'></span>
                        <div className='mx-2'>
                            <button className='setitems d-flex align-items-center btn'>
                                <ThumbDownOffAltIcon />
                                <p className='m-1'>{data.dislike}</p>
                            </button>
                        </div>
                    </div>
                    <div className='mx-2'>
                        <button className='setitems d-flex align-items-center btn'>
                            <ContactSupportIcon />
                            <p className='m-1'>{data.comments}</p>
                        </button>
                    </div>
                    <div className='mx-2'>
                        <button className='setitems d-flex align-items-center btn'>
                            <CachedIcon />
                            <p className='m-1'>{data.share}</p>
                        </button>
                    </div>
                </div>
            </div>
            )
        })
    return (
        <>
            {getdata}
        </>
    )
}

export default Question

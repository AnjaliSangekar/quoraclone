import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Search(props) {
    return (
        <div className='main'>
            <div className='searchComp bg-white p-1 rounded'>
                <div className='searchTop'>
                    <button className='btn userBtn'><AccountCircleIcon /></button>
                    <button className='rounded-pill inputBtn'>What do you want to ask or share</button>
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
    )
}

export default Search

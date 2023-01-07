import './leftbar.css';
import React, { useContext } from 'react'
import filterDatas from './homeFilter.json';
import { FilterValue } from './QuestionFilter.js';

export const Leftbar = () => {
    const value = useContext(FilterValue);

    console.log(value);
    const aaa = (e) => {
        value.setGetFilters(e.target.innerText);
        console.log(value)
    }

    const filters = filterDatas.map(item => {
        return (

            <h1 className='leftbar' key={item.id} onClick={aaa}>
                <img src={item.image} className='rounded' />
                <p>{item.filterName}</p>
            </h1>
        )
    })

    return (
        <>
            <div className='homeleftbar'>
                <ul className='list-unstyled'>
                    {filters}
                </ul>
            </div>
        </>
    )
}
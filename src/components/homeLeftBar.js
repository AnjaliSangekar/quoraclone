import '../App.css';
import React, { useContext } from 'react'
import filterDatas from './json/homeFilter.json';
import { FilterValue } from './context/QuestionFilter.js'

export default function Left() {
    const value = useContext(FilterValue);

    console.log(value);
    const aaa = (e) => {
        value.setGetFilters(e.target.innerText);
        console.log(value)
    }

    const filters = filterDatas.map(item => {
        return (

            <li className='leftbar' key={item.id} onClick={aaa}>
                <img src={item.image} className='rounded' />
                <p>{item.filterName}</p>
            </li>
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
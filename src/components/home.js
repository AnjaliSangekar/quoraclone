import '../App.css';
import React, { useState } from 'react'
import Left from './homeLeftBar'
import Search from './searchComp'
import Question from './question';
import { FilterValue } from './context/QuestionFilter.js';


function Home() {
  const [getFilter, setGetFilters] = useState('');

  return (
    <>
      <div className='bg-light d-flex justify-content-center zBack'>
        <FilterValue.Provider value={{ getFilter, setGetFilters }}>
          <div className='contentWrap'>
            <Left />
            <div className='centerConts'>
              <Search />
              <Question />
            </div>
            <div className='rightCont'>

            </div>
          </div>
        </FilterValue.Provider>
      </div>
    </>
  )
}

export default Home

import React, { useState } from 'react';  //useContext
import '../App.css';
import { Header } from './header/header';
import { Feed } from './feed/feed';
// import { Profile } from './profile/profile';
// import { Leftbar } from './leftbar/leftbar';
// import Provider from 'react-redux';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { SearchFilterValue } from './SearchFilter';


export const App = () => {
  const [search, setSearchValue] = useState(' ');
  return (
    <div> 
      <BrowserRouter>
          <SearchFilterValue.Provider value={{search, setSearchValue}}>
             <Header></Header>
             {/* <Leftbar></Leftbar> */}
             <Routes>
                <Route path="/" element={<Feed></Feed>} /> 
                {/* <Route path="/:userName" element={<Profile></Profile>} />  */}
             </Routes>

          </SearchFilterValue.Provider>      
      </BrowserRouter>
    </div>
  
  );
}



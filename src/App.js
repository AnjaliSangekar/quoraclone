import React, { useState } from 'react';  //useContext
import './App.css';
import NavBar from './components/navBar';
import Home from './components/home';
// import Provider from 'react-redux';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import {SearchFilterValue} from './components/context/SearchFilter';


function App() {
  const [search, setSearchValue] = useState(' ');
  return (
    <>
      <Router>
        <SearchFilterValue.Provider value={{search, setSearchValue}}>

          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </SearchFilterValue.Provider>

      </Router>
    </>
  );
}

export default App;

import React from 'react';
import { useState } from 'react';

import { Route , Routes, BrowserRouter as Router, Form } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Html from './components/Html';
import Css from './components/Css';
import Html_details from './components/Html_details';
import Course from './components/Course';
// import DynamicRouter from './components/DynamicRoute';
function App() {


  return (
    <>
    

      <Router>
      <Navbar></Navbar>
     
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/html' element={<Html/>} />
          <Route path='/css' element={<Css />} />
        
        </Routes>
        
      </Router>
    </>
  );
}

export default App;

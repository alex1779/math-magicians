import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Calculator from './Calculator';
import Quotes from './Quotes';
import ErrorPage from './Errorpage';

function RouterNav() {
  return (
    <>
      <BrowserRouter className="app-container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quotes />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default RouterNav;

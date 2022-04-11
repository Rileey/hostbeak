import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import SideBar from './components/sidebar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import AddBill from './pages/addBill';
import SignUp from './pages/signup';
import Report from './pages/report'

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes >
        <Route path="/" element={<SignUp />} />
        <Route path="/bill" element={<AddBill />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Show from './Show';
import NoRoute from './NoRoute';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/zarzilla-developer-challenge/:pageNumber" element={<App />}/>
        <Route exact path="/zarzilla-developer-challenge/show/" element={<NoRoute />}/>
        <Route path="/zarzilla-developer-challenge/show/:id" element={<Show />}/>
        <Route path="/zarzilla-developer-challenge/*" element={<NoRoute />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

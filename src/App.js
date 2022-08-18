import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home';
import Data from './Data';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data/:id" element={<Data />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

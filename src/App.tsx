import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Header from './components/header';

import { motion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

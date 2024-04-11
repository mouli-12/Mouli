import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './components/Mainpage';
const RoutesContainer: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesContainer;

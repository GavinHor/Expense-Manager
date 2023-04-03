import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Claims from './pages/Claims';
import MyEmp from './pages/MyEmployees';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/myEmployees" element={<MyEmp />} />
      </Routes>
    </div>
  );
}

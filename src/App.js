import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landingpage from './Components/Landingpage';
import Viewpage from './Components/Viewpage';

function App() {
  return (
    <>
      <Router >
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/house/:id" element={<Viewpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

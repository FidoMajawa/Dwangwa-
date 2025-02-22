import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About'; // Create these components as needed
import Pastors from './components/Pastors';
import Events from './components/Events';
import Payments from './components/Payments';
import Join from './components/Join';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pastors" element={<Pastors />} />
          <Route path="/events" element={<Events />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

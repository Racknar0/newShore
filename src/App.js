import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/destination" element={<h1>Contact</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;

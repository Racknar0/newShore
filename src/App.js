import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/destination" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;

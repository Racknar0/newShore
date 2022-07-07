import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { GlobalContextProvider } from './contexts/GobalContext';
import Home from './pages/Home';


function App() {
  return (

    /* ROUTING REACT_DOM V_6 */
    <div className="App">
      <GlobalContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/destination" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </GlobalContextProvider>
  
    </div>
  );
}

export default App;

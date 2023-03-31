import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Aboutus from './pages/Aboutus';
import Skills from './pages/Skills';
import Qualification from './pages/Qualification';
import Experience from './pages/Experience';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Aboutus"element={<Aboutus/>}/>
        <Route path="Skills"element={<Skills/>}/>
        <Route path="Qualification"element={<Qualification/>}/>
        <Route path="Experience"element={<Experience/>}/>
      </Routes>
      </BrowserRouter>
     
         </div>
  );
}

export default App;

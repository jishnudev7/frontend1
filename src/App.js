
import Navbar from './component/navbar.jsx';
import './component/Style.css'
import Register from './component/Register.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Err from './component/error.jsx';
import navbar from './component/navbar.jsx';
import About1 from './component/aboutus.jsx';
import Nav from './component/navbar.jsx'
import React from 'react';
function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/login" element={<Nav/>}/>
      <Route path="/about" element={<About1/>}/>
      <Route path="/error" element={<Err/>}/>
      
      

    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;

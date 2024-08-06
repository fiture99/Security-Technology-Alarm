import React from "react";
import { Route,  Routes } from "react-router-dom";
import Home from './pages/Index'
import About from './pages/About'


export function Nav(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/about" element={<About/>} /> */}
            
        </Routes>
    )
}
export default Nav
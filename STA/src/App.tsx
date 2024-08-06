import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/NavBar'
import Home from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Footer from './pages/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './components/style.css'





function App() {
  return(
    <div className='section'>
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <Partners/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App;

import {useEffect} from 'react'
import './App.css';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Error from './components/Error';
import WebService from './components/WebService';
import AppDevelopment from './components/subservice/AppDevelopment';
import Webdevelopment from './components/subservice/Webdevelopment';
import Digital from './components/subservice/Digital';
import Ecommerce from './components/subservice/Ecommerce';
import Graphic from './components/subservice/Graphic';
import Technicalsup from './components/subservice/Technicalsup';
import WOW from 'wowjs';

function App() {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="webService" element={<WebService/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>} />
        <Route path='blog' element={<Blog/>}/>
        <Route path='appdevelopment' element={<AppDevelopment/>}/>
        <Route path='webdevelopment' element={<Webdevelopment/>}/>
        <Route path='digital' element={<Digital/>}/>
        <Route path='ecommerce' element={<Ecommerce/>}/>
        <Route path='graphic' element={<Graphic/>}/>
        <Route path='technicalsupport' element={<Technicalsup/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;


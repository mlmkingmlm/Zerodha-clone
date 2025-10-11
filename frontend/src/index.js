import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/Home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import AboutPage from './landing_page/About/AboutPage';
import ProductPage from './landing_page/Product/ProductPage';
import PricingPage from './landing_page/Pricing/PricingPage';
import SupportPage from './landing_page/Support/SupportPage';
import Signup from './landing_page/Signup/Signup';
import Login from './landing_page/Signup/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/products' element={<ProductPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>

      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer />
  </BrowserRouter>
);


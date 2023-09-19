import { useSelector } from 'react-redux';
import './App.css'
import image from './assets/hero.png'
import { heroapi, popularsales } from './data/data.js';
import {selectTotalAmount} from './store/CartSlice'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialLink from './components/utils/SocialLink';
import Sales from './components/Sales';

function App() {
  const TotalAmount = useSelector(selectTotalAmount)
  //<Cart /> pendiente
  return (
    <>
     <Navbar/>

      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi}/>
        <Sales endpoint={popularsales} />
      </main>

      {
                      
      }

    </>
  )
}

export default App

/*
import React from 'react';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';

const App = () => {
  return (
   <>
      <Navbar/>
      <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
   </>
  )
}

export default App;
*/
import { useSelector } from 'react-redux';
import './App.css'
import image from './assets/hero.png'
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';
import {selectTotalAmount} from './store/CartSlice'

function App() {
  const TotalAmount = useSelector(selectTotalAmount)

  return (
    <>
     <div>
        <h1 className=" text-3xl font-bold underline">
          hola
        </h1>
        <div>
          {TotalAmount}
        </div>
        <div>
          {
            story.news.map(({img}, index) =>(
              <div key={index}>
                  <img src={img} alt="" />
              </div>
            ))
          }
        </div>
     </div>
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
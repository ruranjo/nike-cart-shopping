import { useSelector } from 'react-redux';
import './App.css'
import image from './assets/hero.png'
import { heroapi, popularsales } from './data/data.js';
import {selectTotalAmount} from './store/CartSlice'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialLink from './components/utils/SocialLink';
import Sales from './components/Sales';
import Cart from './components/Cart';

function App() {
  const TotalAmount = useSelector(selectTotalAmount)
  //<Cart /> pendiente
  return (
    <>
     <Navbar/>
     <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi}/>
        <Sales endpoint={popularsales} ifExists />
      </main>

      {
                      
      }

    </>
  )
}

export default App

/*

      <Cart />
 */
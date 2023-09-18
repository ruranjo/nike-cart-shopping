import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon} from '@heroicons/react/24/outline'
import { useSelector, useDispatch } from 'react-redux'
import { selectTotalQantity,selectCartState, setOpenCart } from '../store/CartSlice'

const Navbar = () => {
    const [navbarState, setNavbarState] = useState(false)
    const totalQTY = useSelector(selectTotalQantity);
    const cartState = useSelector(selectCartState);
    const dispatch = useDispatch();

    const onNavScroll = () => {
        if(window.scrollY > 30){
            setNavbarState(true)
        }else{
            setNavbarState(false)
        }
    }

    const onCartToggle = () =>{
        dispatch(setOpenCart({
            cartState:true
        }))
    }

    useEffect(()=>{
        window.addEventListener('scroll',onNavScroll);
        
        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    },[])

  return (
    <div>
        <header className={ !navbarState ? "absolute top-10 left-0 right-0 opacity-100 z-50" : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-between opacity-100 z-[200] blur-effect-theme " }>
            <nav className='flex items-center justify-between nike-container'>
                <div className='flex items-center'>
                    <img src={logo} alt="logo" className={` w-16 h-auto ${navbarState && "filter brightness-0"}`} />
                </div>
                <ul className='flex items-center justify-center gap-2'>
                    <li className='grid items-center'>
                        <MagnifyingGlassIcon className={` icon-style  ${navbarState && "text-slate-900 transition-all duration-300"} `} />
                    </li>
                    <li className='grid items-center'>
                       <HeartIcon className={`icon-style ${navbarState && "text-slate-900 transition-all duration-300"}`} />
                    </li>
                    <li className='grid items-center'>
                        <button type='button' onClick={onCartToggle} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                       <ShoppingBagIcon className={`icon-style ${navbarState && "text-slate-900 transition-all duration-300"}`} />
                        <div className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navbarState ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-100'}`}>
                            {totalQTY}
                        </div>
                        </button>
                    </li>
                </ul>
                
            </nav>
        </header>
    
    </div>
  )
}


export default Navbar



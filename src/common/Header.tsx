import {MouseEventHandler, useState} from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart, AiFillCloseCircle } from 'react-icons/ai'
import NavToggler from '../components/NavToggler'

const isResNavBarClosed = (e: any) => {

    const navbar = document.getElementsByClassName('res-menu-wrapper') as HTMLCollectionOf<HTMLElement>

    e.preventDefault()

    const closeAnimation = [
        { transform: `translateX(130%)`, easing: "ease-in" },
    ]

    const closeTiming = {
        duration: 1000,
        iterations: 1,
      };

      navbar[0].animate(closeAnimation, closeTiming)

      navbar[0].style.display = 'none'
}

export default function Header ()
{

    const bool = false

    const [btnstatus, setBtnstatus] = useState<boolean>(bool)

    const handleClick = (event: Event) => {

         event.preventDefault()

        console.log('event', event)

      if (btnstatus !== true )
        setBtnstatus(!false)
      else
        setBtnstatus(!true)

const navtoggler = document.getElementsByClassName('res-menu-wrapper') as HTMLCollectionOf<HTMLElement>

const newspaperSpinning = [
        { transform: `translateX(0)`, easing: "ease-out" },
      ];
      
 const newspaperTiming = {
        duration: 1000,
        iterations: 1,
      };

  navtoggler[0].animate(newspaperSpinning, newspaperTiming)

navtoggler[0].style.display = 'block'

    return btnstatus

    }

    const styleCss = btnstatus ? {background: '#f9a024', width: '2rem', height: 'auto'} : {background: '#f9a024', width: '2rem', height: 'auto'}

    return (
       <div className='header'> 
   <header>
<div className='header-wrapper columns-3'>
<div className='logo-wrapper'>
   <a href='#'>
   <img src='https://www.konga.com/_next/static/images/62f8a0d88e07573b4d46735aa24f3f04.png' alt='Logo' width='200' className='logo' />
   </a>
</div>
<div className='menu-search-wrapper'>
<div className='menu-container columns-6'>
<div className=''>
    <a href='#'>
        <div className='menu'>
            <p>Store Locator</p>
        </div>
    </a>
</div>
<div className=''>
    <a href='#'>
        <div className='menu'>
            <p> Sell on Binance </p>
        </div>
    </a>
</div>
<div className='search-container'> 
     {/* <a href='#'> */}
        <div className='menu search'>
           <div className='search-input-wrapper'>
           <input type="text" className='w-full search-input' /> 
           </div>
            <div className='icon-container'> <AiOutlineSearch className='icon'/> </div>
        </div>
    {/* </a> */}
    </div>
<div className=''>
     <a href='#'>
        <div className='menu'>
            <p> Help </p>
        </div>
    </a>
    </div>
<div className=''>
     <a href='#'>
        <div className='menu'>
            <p> Login </p>
        </div>
    </a>
    </div>
<div className='cart-container'>
     <a href='#'>
        <div className='menu'>
           <div className='icon-wrapper'>
          <span>  <AiOutlineShoppingCart className='icon'/></span>
          <span> My Cart  </span> 
           <span className="cart-counter"> 0 </span>
           </div>
        </div>
    </a>
    </div>
</div>
</div>
<div className='res-header-menu'>
    <div className='res-header-menu-wrapper'>
<div className='search-container'> 
     {/* <a href='#'> */}
        <div className='menu search'>
           <div className='search-input-wrapper'>
           <input type="text" className='w-full search-input' /> 
           </div>
            <div className='icon-container'> <AiOutlineSearch className='icon'/> </div>
        </div>
    {/* </a> */}
    </div>
<div className='cart-container'>
     <a href='#'>
        <div className='menu'>
           <div className='icon-wrapper'>
          <span>  <AiOutlineShoppingCart className='icon'/></span>
          <span> My Cart  </span> 
           <span className="cart-counter"> 0 </span>
           </div>
        </div>
    </a>
    </div>
<div>
<NavToggler navTogglerStyle={ {width: '3rem', height: 'auto'}} navTogglerClass='menu-toggler' buttonAction={handleClick} buttonInlineStyle={styleCss} />
</div>
    </div>

<div className='res-menu-wrapper'>
<div className='menu-container'>
<div className='close-navbar'>
<AiFillCloseCircle className='icon' onClick={isResNavBarClosed} />
</div>
<div className='res-single-menu-wrapper'>
    <a href='#'>
        <div className='menu'>
            <p>Store Locator</p>
        </div>
    </a>
</div>
<div className='res-single-menu-wrapper'>
    <a href='#'>
        <div className='menu'>
            <p> Sell on Binance </p>
        </div>
    </a>
</div>
<div className='res-single-menu-wrapper'>
     <a href='#'>
        <div className='menu'>
            <p> Help </p>
        </div>
    </a>
    </div>
<div className='res-single-menu-wrapper'>
     <a href='#'>
        <div className='menu'>
            <p> Login </p>
        </div>
    </a>
    </div>
</div>
</div>
</div>
</div>
    </header>
       </div>
    );

}
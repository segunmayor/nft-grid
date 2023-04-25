export {}
// import {MouseEventHandler, useState} from 'react';
// import { AiOutlineSearch } from 'react-icons/ai'
// import NavToggler from '../components/NavToggler';

// const HeaderRes = () =>
// {

//     const bool = false

//     const [btnstatus, setBtnstatus] = useState<boolean>(bool)

//     const handleClick = (event: MouseEventHandler<HTMLButtonElement>) => {

//       if (btnstatus !== true )
//         setBtnstatus(!false)
//       else
//         setBtnstatus(!true)
      
//       console.log('btnstatus', btnstatus, event)

//       return btnstatus

//     }

//     const styleCss = btnstatus ? {background: 'blue', width: '100px'} : {background: 'red', width: '100px'}

//     return (
//        <div className='header-res'>
//         <NavToggler navTogglerStyle={ {width: '100px'}} navTogglerClass='menu-toggler' buttonAction={handleClick} buttonInlineStyle={styleCss} />
//    <header>
// <div className='nav-res-container'>
// <div>
//    <a href='#'>
//    <img src='https://www.konga.com/_next/static/images/62f8a0d88e07573b4d46735aa24f3f04.png' alt='Logo' />
//    </a>
// </div>
// <div className='block'>
//     <a href='#'>
//         <div className='menu'>
//             <p>Store Locator</p>
//         </div>
//     </a>
// </div>
// <div className='block'>
//     <a href='#'>
//         <div className='menu'>
//             <p> Sell on Binance </p>
//         </div>
//     </a>
// </div>
// <div className='w-80 block'> 
    
//      {/* <a href='#'> */}
//         <div className='menu search'>
//             <input type="text" className='w-full search-input' /> 
//             <div className='icon-container'> <AiOutlineSearch className='icon'/> </div>
//         </div>
//     {/* </a> */}
//     </div>
// <div className='block'>
    
    
//      <a href='#'>
//         <div className='menu'>
//             <p> Help </p>
//         </div>
//     </a></div>
// <div className='block'>
    
    
//      <a href='#'>
//         <div className='menu'>
//             <p> Login </p>
//         </div>
//     </a></div>
// <div className='block'>
    
//      <a href='#'>
//         <div className='menu'>
//             <p> My Cart </p>
//         </div>
//     </a></div>
// </div>
//     </header>
//        </div>
//     );

// }

// export default HeaderRes
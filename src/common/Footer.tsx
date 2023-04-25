import react from 'react'
import { AiFillMail } from 'react-icons/ai';

export default function Footer ()
{
    return (

        <div className='footer'>
            <footer id='footer'>
                <div className='container p-0'>
                    <div className='footer-section-1 p-0'>
                        <div className='footer-cols columns-4'>
                            <div className='content'>
                                <div className='icon text-4xl'>
                                    <AiFillMail />
                                </div>
                               <div className='text-left'>
                               <span style={{fontWeight: 'bold'}}>
                                    EMAIL SUPPORT <br />
                                </span> 
                                <span>
                                    help@test.com  
                                </span>
                               </div>
                            </div>
                            <div className='content'>
                                <div className='icon text-4xl'>
                                    <AiFillMail />
                                </div>
                               <div className='text-left'>
                               <span style={{fontWeight: 'bold'}}>
                                    PHONE SUPPORT <br />
                                </span> 
                                <span>
                                    +234 90 9214 9449
                                </span>
                               </div>
                            </div>
                            <div className='content'>
                                <div className='icon text-4xl'>
                                    <AiFillMail />
                                </div>
                                <div className='text-left'>
                                <span style={{fontWeight: 'bold'}}>
                                    WHATSAPP<br />
                                </span> 
                                <span>
                                    +234 90 9214 9449
                                </span>
                                </div>
                            </div>
                            <div className='content'>
                                <div className='icon text-4xl'>
                                    <AiFillMail />
                                </div>
                            <div className='text-left'>
                            <span style={{fontWeight: 'bold'}}>
                                    GET LATEST DEALS <br />
                                </span> 
                                <span>
                                  <a href='#'>
                                    Etherum sold at the best rate. Learn more...
                                  </a>
                                </span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
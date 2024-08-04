import React from 'react';
import Logo from '../../public/logo-new.png'
import NamaLogo from '../../public/nameZuri.png'
import {LuAlignJustify} from "react-icons/lu";

function Navbar({setSidebar}){

    return(
        <nav className="bg-primary inset-x-0 top-0">
            <div className="max-w-7xl px-2">
                <div className="flex relative h-16 items-center justify-stretch">
                    <div className= "flex relative ml-3 w-56">
                        <div className="flex relative w-full">
                            <img className="relative h-8 w-auto place-self-center" src={Logo} alt="Your Company" />
                            <img className="relative h-8 ml-2 w-auto place-self-center" src={NamaLogo} alt="Your Company" />
                            {/* <h1 className="ml-2 w-30 text-2xl place-self-center text-white font-bold">ZURI API</h1> */}
                        </div>
                    </div>
                    <div className='flex relative ml-3 w-full'>
                        <div className="flex relative w-full">
                            <button 
                                className='bg-transparent hover:bg-secondary text-white font-bold py-4 px-4 rounded'
                                onClick={setSidebar}
                            >
                                <LuAlignJustify />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    ) 
}
 
export default Navbar;
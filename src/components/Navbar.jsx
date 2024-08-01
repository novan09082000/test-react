import React from 'react';
import Logo from '../../public/logo-2.png'

function Navbar(){
    return(
        <nav className="bg-primary inset-x-0 top-0">
            <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex relative h-16 items-center justify-stretch">
                    <div className= "flex relative ml-3 w-full">
                        <div className="flex relative w-full">
                            <img className="relative h-8 w-auto place-self-center" src={Logo} alt="Your Company" />
                            <h1 className="ml-2 w-20 place-self-center text-white font-bold">ZURI API</h1>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    ) 
}
 
export default Navbar;
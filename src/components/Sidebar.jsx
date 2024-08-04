import React, { useState } from 'react';

function Sidebar({setSidebar}) {
    const [lebar, setLebar] = useState('')

    const newClass = `${setSidebar === true ? 'w-56' : 'w-56'}`
    const setOpacitySidebar = `${setSidebar === true ? 'translate-x-0' : '-translate-x-full'}`
    
    return(
        <div className="flex">
          <div className={`fixed ${newClass} h-screen bg-secondary transition-transform duration-500 ease-in-out ${setOpacitySidebar}`}>
          </div>
        </div>
    )
}

export default Sidebar;
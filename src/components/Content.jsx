import React from 'react';

function Content({setSidebar}) {


    const newClass = `${setSidebar === true ? 'ml-56' : 'ml-0'}`
    const setOpacitySidebar = `${setSidebar === true ? 'translate-x-0 ' : 'w-full translate-x-0'}`

    return(
        <div className={`fixed ${newClass} h-screen bg-content overflow-auto p-10 transition-margin duration-500 ease-in-out ${setOpacitySidebar}`}>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eos, unde voluptatibus ex magni autem ipsa explicabo sunt! Dignissimos, soluta et debitis totam odit enim possimus dolorem excepturi quas. Dignissimos?</h2>
        </div>
    )
}

export default Content;
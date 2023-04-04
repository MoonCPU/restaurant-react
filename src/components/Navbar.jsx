import React, { Suspense, lazy } from "react";
import { useState } from "react";

import { Link, Outlet } from "react-router-dom";

import {GiSushis} from 'react-icons/gi'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

    return(
        <div>
            <div className="max-w-2xl flex flex-row items-center justify-between mx-auto p-5">
                <div className="text-5xl sm:text-6xl flex flex-row items-center justify-center">
                    <GiSushis className="text-red-700 mr-2" size={50}/>
                    <h1 className="text-4xl">Ichiban Sushi</h1>
                </div>
                <ul className="hidden sm:flex flex-row">
                    <li className="px-2 text-xl"><button><Link to="/">Home</Link></button></li>
                    <li className="px-2 text-xl"><Link to="/gallery">Gallery</Link></li>
                    <li className="px-2 text-xl"><Link to="/credits">Credits</Link></li>
                </ul>

                {/* mobile menu icons*/}
                <div onClick={handleNav} className="block sm:hidden">
                    {!nav ? <AiOutlineClose className="sm:hidden cursor-pointer" size={30}/> : <AiOutlineMenu className="sm:hidden cursor-pointer" size={30} /> }                    
                </div>
                
                <div
                className={!nav ? 'fixed flex flex-col left-0 top-0 w-[75%] h-screen border-r border-r-gray-900 ease-in-out duration-500 sm:hidden z-[100] bg-[#FDFDFD]': 'fixed flex flex-col h-screen left-[-100%] ease-in-out duration-500'}>
                    <ul className="uppercase mt-5 ml-5">
                        <GiSushis className="text-red-700 mr-2" size={50}/>
                        <li className="p-2 text-2xl border-b border-gray-300 mt-10" onClick={handleNav}><Link to="/">Home</Link></li>
                        <li className="p-2 text-2xl border-b border-gray-300" onClick={handleNav}><Link to="/gallery">Gallery</Link></li>
                        <li className="p-2 text-2xl"><Link to="/credits" onClick={handleNav}>Credits</Link></li>
                    </ul>
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Outlet />                        
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
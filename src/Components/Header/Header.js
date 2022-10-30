import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div>
        <div className='bg-gradient-to-r bg-black'>
        <div className='header-container m-auto py-5 flex justify-between items-center'>
                <div>
                <h1 className='font-bold uppercase text-white border border-zinc-900 p-2 bg-black rotate-6'>Cut Me Off</h1>
                </div>
                <div>
                    <ul className="flex">
                        <li className="menu-list"><a href="#">Home</a></li>
                        <li className="menu-list"><a href="#">Shop</a></li>
                        <li className="menu-list"><a href="#">About</a></li>
                        <li className="menu-list"><a href="#">Blog</a></li>
                        <li className="menu-list"><a href="#">Contact</a></li>
                        
                    </ul>
                </div>

            </div>
        </div>
        <h1 className='text-xl font-semibold w-100 from-cyan-500 to-blue-500 p-1 text-white '>Hello Tasnimul From React Project Visual Studio Code</h1>
        </div>
    );
};

export default Header;
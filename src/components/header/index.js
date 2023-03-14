
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        let screen = window.innerWidth;
        if ("1023" < screen) {
            console.log("I am working")
            setOpen(true);
            
        }
    }, [])
    return (
        <div className="bg-gray-900 text-white">
            <div className="lg:w-[1260px] max-w-full mx-auto relative ">
                <div className="flex items-center justify-between">
                    <div className="main_logo relative z-50">
                        <img src="./images/logo.png" width={117} height={35} />
                    </div>
                    <div className="main_menu">
                        <ul className={`flex gap-4 lg:gap-0 lg:flex-row flex-col absolute  lg:static left-0 top-full w-full bg-gray-900 items-center py-6 py-3 animate-menu_ani ${isOpen ? null : 'hidden'}`}>
                            <li className="mx-2"><Link to="/" className="py-3 px-4 text-sm font-bold font-mont">Home</Link></li>
                            <li className="mx-2"><Link to="/aboutus" className="py-3 px-4 text-sm font-bold">About Us</Link></li>
                            <li className="mx-2"><Link to="/" className="py-3 px-4 text-sm font-bold">Events</Link></li>
                            <li className="mx-2"><Link to="/" className="py-3 px-4 text-sm font-bold">Content</Link></li>
                            <li className="mx-2"><Link to="/" className="py-3 px-4 text-sm font-bold">Support us</Link></li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="lg:hidden">
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        </div>

                        <button className="bg-[#7230b0] py-3 px-5 rounded-full font-bold font-lato leading-none hover:bg-black hover:text-white hidden lg:block">Support us</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Header
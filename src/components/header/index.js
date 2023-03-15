
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        let screen = window.innerWidth;
        if ("1023" < screen) {
            setOpen(true);

        }
    }, [])
    return (
        <div className="bg-gray-900 text-white py-3 md:py-0">
            <div className="lg:w-[1260px] max-w-full  mx-auto relative ">
                <div className="flex items-center justify-between">
                    <div className="main_logo relative z-50 px-2">
                        <Link to="/">
                            <img src="/images/logo.png" width={117} height={35} alt="logo" />
                        </Link>

                    </div>
                    <div className="main_menu">
                        <ul className={`flex gap-4 lg:gap-0 lg:flex-row flex-col absolute z-10  lg:static left-0 top-full w-full bg-gray-900 items-center py-6 py-3 animate-menu_ani ${isOpen ? null : 'hidden'}`}>
                            <li className="mx-2 px-4"><Link to="/" className="py-1 text-sm font-bold font-mont border-b border-gray-900 hover:border-white">Home</Link></li>
                            <li className="mx-2 px-4"><Link to="/aboutus" className="py-1 text-sm font-bold border-b border-gray-900 hover:border-white">About Us</Link></li>
                            <li className="mx-2 px-4"><Link to="/" className="py-1 text-sm font-bold border-b border-gray-900 hover:border-white">Events</Link></li>
                            <li className="mx-2 px-4"><Link to="/active_projects" className="py-1 text-sm font-bold border-b border-gray-900 hover:border-white">Projects</Link></li>
                            <li className="mx-2 px-4"><Link to="/contactus" className="py-1 text-sm font-bold border-b border-gray-900 hover:border-white">Content</Link></li>

                        </ul>
                    </div>
                    <div className="px-2">
                        <div className="lg:hidden">
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        </div>
                        <Link to="/user/login">
                            <button className="bg-[#7230b0] border hover:border-white border-gray-900 py-3 px-6 rounded-full font-bold font-lato leading-none hover:bg-black hover:text-white hidden lg:block">Log In</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Header
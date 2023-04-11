
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import { Icon } from '@iconify/react';

const Header = () => {
    const { pathname } = useLocation();
    const [isOpen, setOpen] = useState(false);
    const [dropmenu, setDropmenu] = useState(false);
    useEffect(() => {
        let screen = window.innerWidth;
        if ("1023" < screen) {
            setOpen(true);
        }
        else {
            setOpen(false);
        }
    }, [pathname])

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
                        <ul className={`flex gap-4 lg:gap-0 lg:flex-row flex-col absolute z-20  lg:static left-0 top-full w-full bg-gray-900 items-center py-6 py-3 animate-menu_ani ${isOpen ? null : 'hidden'}`}>
                            <li className="mx-2 px-4"><Link to="/" className="py-1 text-sm font-bold font-mont border-b border-gray-900  underline-custom" onClick={() => setDropmenu(false)}>Home</Link></li>
                            <li className="mx-2 px-4"><Link to="/aboutus" className="py-1 text-sm font-bold border-b border-gray-900  underline-custom" onClick={() => setDropmenu(false)}>About Us</Link></li>
                            <li className="mx-2 px-4 relative inline-block cursor-pointer group " onClick={() => setDropmenu(!dropmenu)}>
                                <span className="py-1 text-sm font-bold border-b border-gray-900  flex items-center underline-custom">Projects <Icon icon="gridicons:dropdown" className="text-xl" /></span>
                                <div className={`${dropmenu ? "" : "hidden"} absolute left-1/2 z-20 mt-1 w-48 -translate-x-1/2 top-10 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                    <div className="py-1 relative after:absolute after:w-3 after:h-3 after:content-[''] after:bg-white after:-top-[2px] after:left-1/2 after:-top-2 after:rotate-45 after:-translate-x-1/2 after:z-0" role="none">
                                        <Link to="/projects/active_items" className="text-gray-700 block px-4 py-2 text-sm font-bold hover:bg-gray-100" >Active Projects</Link>
                                        <Link to="/projects/past_items" className="text-gray-700 block px-4 py-2 text-sm font-bold hover:bg-gray-100" >Past Projects</Link>
                                    </div>

                                </div>
                            </li>
                            <li className="mx-2 px-4"><Link to="/faqs" className="py-1 text-sm font-bold border-b border-gray-900  underline-custom" onClick={() => setDropmenu(false)}>FAQs</Link></li>
                            <li className="mx-2 px-4"><Link to="/contactus" className="py-1 text-sm font-bold border-b border-gray-900  underline-custom lg:hidden" onClick={() => setDropmenu(false)}>Contact US</Link></li>

                        </ul>
                    </div>
                    <div className="px-2">
                        <div className="lg:hidden">
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        </div>
                        <Link to="/contactus" onClick={() => setDropmenu(false)}>
                            <button className="bg-[#7230b0] border  border-gray-900 py-3 px-6 rounded-full font-bold font-lato leading-none hover:bg-black hover:text-white hover:border-white hidden lg:block">Contact Us</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Header
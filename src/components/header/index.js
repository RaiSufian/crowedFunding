import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-gray-900 text-white">
            <div className="lg:w-[1260px] max-w-full mx-auto">
                <div className="flex items-center justify-between">
                    <div className="main_logo">
                        <img src="./images/logo.png" width={117} height={35} />
                    </div>
                    <div className="main_menu">
                        <ul class="flex flex-row items-center py-6 py-3">
                            <li class="mx-2"><Link to="/" className="py-3 px-4 text-sm font-bold font-mont">Home</Link></li>
                            <li class="mx-2"><Link to="/aboutus" className="py-3 px-4 text-sm font-bold">About Us</Link></li>
                            <li class="mx-2"><Link to="/" className="py-3 px-4 text-sm font-bold">About</Link></li>
                            <li class="mx-2"><Link to="/" className="py-3 px-4 text-sm font-bold">Services</Link></li>
                            <li class="mx-2"><Link to="/" className="py-3 px-4 text-sm font-bold">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="">
                        <button className="bg-[#7230b0] py-3 px-5 rounded-full font-bold font-lato leading-none">Support us</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Header
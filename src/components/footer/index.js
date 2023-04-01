import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
const Footer = () => {
    return (
        <div className="bg-gray-900 text-white">
            <div className="lg:w-[1260px] max-w-full mx-auto">
                <div className="md:flex px-[6.3vw] py-3 items-center justify-between">
                    <div className="footer_menu">
                        <div className="main_menu">
                            <ul class="flex flex-row flex-wrap items-center py-6 py-3">
                                <li class="mx-2"><Link to="/" className="py-3 px-3 text-sm  font-mont">Home</Link></li>
                                <li class="mx-2"><Link to="/aboutus" className="py-3 px-3 text-sm ">About Us</Link></li>
                                <li class="mx-2"><Link to="/contactus" className="py-3 px-3 text-sm ">Contact</Link></li>
                                <li class="mx-2"><Link to="/privacy_policy" className="py-3 px-3 text-sm ">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_social">
                        <ul className="flex flex-row items-center">
                            <li class="mx-4">
                                <a href="google.com" className="text-lg px-3"><Icon icon="ri:facebook-fill" /></a>

                            </li>
                            <li class="mx-4">
                                <a href="google.com" className="text-lg px-3"><Icon icon="mdi:twitter" /></a>

                            </li>
                            <li class="mx-4">
                                <a href="google.com" className="text-lg px-3"><Icon icon="mdi:instagram" /></a>

                            </li>
                            <li class="mx-4">
                                <a href="google.com" className="text-lg px-3"><Icon icon="ant-design:youtube-filled" /></a>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="text-center text-white">
                Copyright © 2023 CapitalRise. All Rights Reserved.
            </div>
        </div>
    )
}
export default Footer;

import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
const Footer = () => {
    return (
        <div className="bg-gray-900 text-white">
            <div className="lg:w-[1260px] max-w-full mx-auto">
                <div className="md:flex px-[6.3vw] py-3 items-center justify-between">
                    <div className="footer_menu">
                        <div className="main_menu">
                            <ul class="flex flex-row flex-wrap items-center md:py-6 py-3 py-3 justify-center md:jsutify-start">
                                <li class="mx-2"><Link to="/" className="py-3 lg:px-3 px-1 text-sm  font-mont">Home</Link></li>
                                <li class="mx-2"><Link to="/aboutus" className="py-3 lg:px-3 px-1 text-sm ">About Us</Link></li>
                                <li class="mx-2"><Link to="/contactus" className="py-3 lg:px-3 px-1 text-sm ">Contact</Link></li>
                                <li class="mx-2"><Link to="/privacy_policy" className="py-3 lg:px-3 px-1 text-sm ">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_social">
                        <ul className="flex flex-row items-center justify-center md:jsutify-end">
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
            <div className="border-t border-gray-600"></div>
            <div className="text-center py-2 text-sm text-gray-400">
                Copyright © 2023 to 2024 vcrowdfund. All Rights Reserved.
            </div>
        </div>
    )
}
export default Footer;

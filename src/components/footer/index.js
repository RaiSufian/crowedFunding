import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
const Footer = () => {
    const [socialLinks, setSocialLink] = useState([]);
    const GetSociailLinks = async () => {

        try {
            await axios.get("/index.php?action=get_social_links").then((resp) => {
                console.log("get api result for socail links", resp.data.data);
                setSocialLink(resp.data.data);
            })
        }
        catch (error) {
            console.log("get api error for socail links", error);
        }
    }
    useEffect(() => {
        GetSociailLinks();
    }, [])
    return (
        <div className="bg-gray-900 text-white">
            <div className="lg:w-[1340px] max-w-full mx-auto">
                <div className="md:flex px-[6.3vw] py-3 items-center justify-between">
                    <div className="footer_menu">
                        <div className="main_menu">
                            <ul class="flex flex-row flex-wrap items-center md:py-6 py-3 py-3 justify-center md:jsutify-start">
                                <li class="mx-2"><Link to="/terms_&_conditions" className="py-3 lg:px-3 px-1 text-sm  font-mont">Terms & Conditions</Link></li>
                                <li class="mx-2"><Link to="/view_agreement" className="py-3 lg:px-3 px-1 text-sm ">Agreement</Link></li>
                                <li class="mx-2"><Link to="/disclaimer" className="py-3 lg:px-3 px-1 text-sm ">Disclaimer</Link></li>
                                <li class="mx-2"><Link to="/privacy_policy" className="py-3 lg:px-3 px-1 text-sm ">Privacy Policy</Link></li>
                                <li class="mx-2"><Link to="/risk_statement" className="py-3 lg:px-3 px-1 text-sm ">Risk Statement</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_social main_menu">
                        <ul className="flex flex-row items-center justify-center md:jsutify-end">
                            {socialLinks.map((item, index) => {
                                if (item.sl_title == "Facebook") {
                                    return (

                                        <li class="mx-4" key={index}>
                                            <a href={item.sl_url} className="text-lg px-3"><Icon icon="basil:facebook-solid" /></a>

                                        </li>

                                    )
                                }
                                else if (item.sl_title == "Twitter") {
                                    return (

                                        <li class="mx-4" key={index}>
                                            <a href={item.sl_url} className="text-lg px-3"><Icon icon="mdi:twitter" /></a>

                                        </li>

                                    )
                                }
                                else if (item.sl_title == "Instagram") {
                                    return (

                                        <li class="mx-4" key={index}>
                                            <a href={item.sl_url} className="text-lg px-3"><Icon icon="mdi:instagram" /></a>

                                        </li>

                                    )
                                }
                                else if (item.sl_title == "Youtube") {
                                    return (

                                        <li class="mx-4" key={index}>
                                            <a href={item.sl_url} className="text-lg px-3"><Icon icon="ant-design:youtube-filled" /></a>

                                        </li>

                                    )
                                }
                                else if (item.sl_title == "RSS") {
                                    return (

                                        <li class="mx-4" key={index}>
                                            <a href={item.sl_url} className="text-lg px-3"><Icon icon="ic:baseline-rss-feed" /></a>

                                        </li>

                                    )
                                }
                                else if (item.sl_title == "LinkedIn") {
                                    return (

                                        <li class="mx-4" key={index}>
                                            <a href={item.sl_url} className="text-lg px-3"><Icon icon="jam:linkedin" /></a>

                                        </li>

                                    )
                                }

                            }

                            )}

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

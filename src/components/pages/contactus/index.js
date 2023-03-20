import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';


const ContactUs = () => {
    return (
        <>
            <div className="contact_bread_crumb lg:py-8 lg:py-6 py-4 bg-gray-100 border-b  border-gray-200 px-2">
                <div className="lg:w-[1260px] max-w-full mx-auto font-mont relative">
                    <h1 className="lg:text-4xl md:text-2xl text-2xl px-2">Contact Us</h1>
                    <span className="px-2 mt-3 text-gray-500 text-md">We provide Amazing Services</span>
                    <ul className="absolute top-1/4 right-0 flex gap-2 text-sm text-gray-700">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        /
                        <li>
                            Contacts
                        </li>
                    </ul>
                </div>
            </div>
            <div className=" lg:w-[1260px] max-w-full mx-auto lg:py-10 md:py-8 py-4 px-2 ">
                <h2 className="md:py-5 py-2 lg:text-[40px] md:text-[30px] text-[28px] font-bold text-center text-[#151D29FF]">
                    Get in touch
                </h2>
                <div className="lg:w-[14%] w-[25%] border-t-8 border-[#ffa500] mx-auto mb-10"></div>
                <div className="lg:flex">
                    <div className="lg:w-[40%] md:px-5 px-2 lg:px-1">
                        <h4 className="uppercase text-2xl font-bold text-gray-600 py-2">Don't be shy</h4>
                        <p>Fell free to get in touch with me. I am always open to discussing new projects. Creative ideas or opportunties to be part of your visions</p>
                        <ul className="py-2">
                            <li className="flex items-center gap-3 pt-3">
                                <span className="bg-[#ffa500] p-1 rounded-full"><Icon icon="ic:outline-email" className="text-4xl text-white " /></span>   <a href="">temp@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-3 pt-3">
                                <span className="bg-[#ffa500] p-1 rounded-full"><Icon icon="material-symbols:phone-in-talk-outline" className="text-4xl text-white " /></span>   <a href="">+44 123 456 65</a>
                            </li>
                            <li className="flex items-center gap-3 pt-3">
                                <span className="bg-[#ffa500] p-1 rounded-full"><Icon icon="ic:outline-email" className="text-4xl text-white " /></span>   <a href="">temp@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-[60%] md:px-5 px-2 lg:px-1">
                        <form>
                            <div className="pt-3">
                                <input type="text" placeholder="Name" className=" w-full h-12 py-1 px-2 bg-gray-100" required />
                            </div>
                            <div className="pt-3">
                                <input type="email" placeholder="Email" className="w-full h-12 py-1 px-2 bg-gray-100" required />
                            </div>
                            <div className="pt-3">
                                <input type="number" placeholder="Phone" className="w-full h-12 py-1 px-2 bg-gray-100" required />
                            </div>
                            <div className="pt-3">
                                <textarea placeholder="Enter your message " className="w-full h-28 py-1 px-2 bg-gray-100"></textarea>
                            </div>
                            <div className="pt-3">
                                <input type="submit" value="Send" className="w-2/6 h-12 py-1 px-2 bg-[#7230b0] text-white rounded-full text-xl" />
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </>

    )
}
export default ContactUs;
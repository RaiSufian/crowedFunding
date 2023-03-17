import { Link } from 'react-router-dom'
const StartFunding = () => {
    return (
        <>
            <div className="contact_bread_crumb py-8 bg-gray-100 border-b  border-gray-200 px-2">
                <div className="lg:w-[1260px] max-w-full mx-auto font-mont relative">
                    <h1 className=" text-4xl px-2">Start Investing
                    </h1>
                    <span className="px-2 mt-3 text-gray-500 text-md">We provide Amazing Services</span>
                    <ul className="absolute top-1/4 right-0 flex gap-2 text-sm text-gray-700">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        /
                        <li>
                            Investment
                        </li>
                    </ul>
                </div>
            </div>
            <div className="">
                <div className="lg:w-[1260px] max-w-full mx-auto font-mont relative py-10">
                    <h2 className="text-center text-2xl font-semibold pb-5 ">Enter Your Personal Infomation</h2>
                    <div className="bg-gray-100 px-5 font-mont">
                        <form className="flex flex-wrap py-8">
                            <div className="pt-4 w-1/2 px-2">
                                <label>Email<span className="text-red-500 text-xl">*</span></label>
                                <input type="email" className="h-11 border-1 w-full py-1 px-2 rounded" placeholder='enter your email' required />
                            </div>
                            <div className="pt-4 w-1/2 px-2">
                                <label>Confirm Email<span className="text-red-500 text-xl">*</span></label>
                                <input type="email" className="h-11 border-1 w-full py-1 px-2 rounded" placeholder='confirm your email' required />
                            </div>
                            <div className="pt-4 w-1/2 px-2">
                                <label>Name<span className="text-red-500 text-xl">*</span ></label>
                                <input type="name" className="h-11 border-1 w-full py-1 px-2 rounded" placeholder='enter your name' required />
                            </div>
                            <div className="pt-4 w-1/2 px-2">
                                <label>Phone<span className="text-red-500 text-xl">*</span></label>
                                <input type="name" className="h-11 border-1 w-full py-1 px-2 rounded" placeholder='enter your name' required />
                            </div>
                            <div className="pt-4 w-1/2 px-2">
                                <label>Day of Birth<span className="text-red-500 text-xl">*</span></label>
                                <input type="date" className="h-11 border-1 w-full py-1 px-2 rounded" placeholder='' required />
                            </div>
                            <div className="pt-4 w-3/4 px-2">
                                <label>Address<span className="text-red-500 text-xl">*</span></label>
                                <input type="text" className="h-11 border-1 w-full py-1 px-2 rounded" placeholder='enter your address' required />
                            </div>
                            <div className="pt-4 w-1/3 px-2">
                                <label>House no<span className="text-red-500 text-xl">*</span></label>
                                <input type="text" className="h-11 border-1 w-full py-1 px-2 rounded" placeholder='enter your address' required />
                            </div>
                            <div className="pt-4 w-1/3 px-2">
                                <label>Town<span className="text-red-500 text-xl">*</span></label>
                                <input type="text" className="h-11 border-1 w-full py-1 px-2 rounded" placeholder='enter your address' required />
                            </div>
                            <div className="pt-4 w-1/3 px-2">
                                <label>House no<span className="text-red-500 text-xl">*</span></label>
                                <input type="text" className="h-11 border-1 w-full py-1 px-2 rounded" placeholder='enter your address' required />
                            </div>
                            <div className="pt-4 w-1/3 px-2">
                                <label>Country<span className="text-red-500 text-xl">*</span></label>
                                <input type="text" className="h-11 border-1 w-full py-1 px-2 rounded" placeholder='enter your address' required />
                            </div>
                            <div className="pt-4 w-1/3 px-2">
                                <label>State<span className="text-red-500 text-xl">*</span></label>
                                <input type="text" className="h-11 border-1 w-full py-1 px-2 rounded" placeholder='enter your address' required />
                            </div>
                            <div className="pt-4 w-1/3 px-2">
                                <label>City<span className="text-red-500 text-xl">*</span></label>
                                <input type="text" className="h-11 border-1 w-full py-1 px-2 rounded" placeholder='enter your address' required />
                            </div>
                            <div className="pt-4 w-full px-2 flex items-center gap-2">
                                <input type="checkbox" /> <Link className="font-xl">Terms & Conditions</Link>
                            </div>
                            <div className="pt-4 w-full px-2 flex items-center gap-2">
                                <input type="checkbox" /> You need to check <Link >Disclaimer</Link>
                            </div>
                            <div className="pt-4 w-full px-2 flex items-center gap-2">
                                <input type="checkbox" /> Check agreement <Link >Agree</Link>
                            </div>

                            <div className="pt-5 w-full px-2 ">
                                <button className="w-1/4 bg-blue-500 text-white py-2">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StartFunding;
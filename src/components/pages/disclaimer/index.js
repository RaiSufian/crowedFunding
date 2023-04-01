import {Link } from 'react-router-dom';
const Disclaimer = () => {
    return (
        <>
            <div className="contact_bread_crumb lg:py-8 lg:py-6 py-4 bg-gray-100 border-b  border-gray-200 px-2">
                <div className="lg:w-[1260px] max-w-full mx-auto font-mont relative">
                    <h1 className="lg:text-4xl md:text-2xl text-2xl px-2">Disclaimer</h1>
                    <span className="px-2 mt-3 text-gray-500 text-md">We provide Amazing Services</span>
                    <ul className="absolute top-1/4 right-0 flex gap-2 text-sm text-gray-700">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        /
                        <li>
                            Disclaimer
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="lg:w-[1240px] max-w-full mx-auto lg:py-10 md:py-8 py-4 px-2">
                    <h2 className="md:py-5 py-2 lg:text-[40px] md:text-[30px] text-[28px] font-bold text-center text-[#151D29FF]">
                        Disclaimer
                    </h2>
                    <div className="lg:w-[14%] w-[25%] border-t-8 border-[#ffa500] mx-auto mb-10"></div>


                </div>
            </div>
        </>
    )
}
export default Disclaimer;
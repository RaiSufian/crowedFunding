import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <>
            <div className="contact_bread_crumb py-8 bg-gray-100 border-b  border-gray-200 px-2">
                <div className="lg:w-[1260px] max-w-full mx-auto font-mont relative">
                    <h1 className=" text-4xl px-2">About Us</h1>
                    <span className="px-2 mt-3 text-gray-500 text-md">We provide Amazing Services</span>
                    <ul className="absolute top-1/4 right-0 flex gap-2 text-sm text-gray-700">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        /
                        <li>
                            About Us
                        </li>
                    </ul>
                </div>
            </div>
            <section className=" py-10">
                <div className="lg:w-[1260px] max-w-full mx-auto px-5 font-mont">
                    <div className="lg:flex items-center">
                        <div className="lg:w-[60%]">
                            <h1 className="lg:text-[32px] md:text-[28px] text-[20px] font-bold text-[#151D29FF] pb-2 font-lato">Investment Accessible To Everyone</h1>
                            <p className="text-lg text-gray-800">Real estate properties, in general, carry a lower risk of devaluation. However, to initiate investment in properties, a considerable sum of money is usually required. Investment products tailored to cater to the needs of small-scale investors in London properties are currently limited. London's real estate market is one of the most dynamic in the world, with a high rate of movement owing to its position as a global banking and finance hub, with numerous people relocating in and out of the city.</p>
                        </div>
                        <div className="lg:w-[40%] relative before:absolute before:w-72 before:z-0 before:h-32 before:content-[''] before:top-10 before:border-8 before:border-b-0 before:left-1/2 before:-translate-x-1/2 before:border-[#ffa500] after:absolute after:h-32 after:w-72 after:content-[''] after:border-[#ffa500] after:border-8 after:left-1/2 after:-translate-x-1/2 after:bottom-10 after:border-t-0 after:z-20">
                            <img src="/images/About-Us.png" className="h-80 mx-auto relative z-10" alt="about_img" />
                        </div>

                    </div>
                    <div className="py-8">
                        <h3 className="text-center text-3xl font-bold font-lato">About the Founders
                        </h3>
                        <div className="lg:flex pt-7 ">
                            <div className="lg:w-[30%] flex ">
                                <div className="relative before:absolute before:w-full before:h-full before:content-[''] before:bg-black before:top-2 before:right-2 mx-auto">
                                    <img src="/images/ceo_img.jpg" alt="ceo_img" className="w-60 h-60 object-cover relative z-10" />
                                </div>
                            </div>
                            <div className="lg:w-[70%]">
                                <h2 className="text-2xl font-bold pb-3 font-lato pt-4 lg:pt-0">CEO Message</h2>
                                <p className="text-lg text-gray-800 ">Real estate properties, in general, carry a lower risk of devaluation. However, to initiate investment in properties, a considerable sum of money is usually required. Investment products tailored to cater to the needs of small-scale investors in London properties are currently limited. London's real estate market is one of the most dynamic in the world, with a high rate of movement owing to its position as a global banking and finance hub, with numerous people relocating in and out of the city.</p>
                            </div>
                        </div>
                        <div className="lg:flex pt-7 ">
                            <div className="lg:w-[30%] flex ">
                                <div className="relative before:absolute before:w-full before:h-full before:content-[''] before:bg-black before:top-2 before:right-2 mx-auto">
                                    <img src="/images/ceo_img.jpg" alt="ceo_img" className="w-60 h-60 object-cover relative z-10" />
                                </div>
                            </div>
                            <div className="lg:w-[70%]">
                                <h2 className="text-2xl font-bold pb-3 font-lato pt-4 lg:pt-0">Founder Message</h2>
                                <p className="text-lg text-gray-800 ">Real estate properties, in general, carry a lower risk of devaluation. However, to initiate investment in properties, a considerable sum of money is usually required. Investment products tailored to cater to the needs of small-scale investors in London properties are currently limited. London's real estate market is one of the most dynamic in the world, with a high rate of movement owing to its position as a global banking and finance hub, with numerous people relocating in and out of the city.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutUs;
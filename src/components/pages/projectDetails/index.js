import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
const ProjectDetails = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="contact_bread_crumb py-8 bg-gray-100 border-b  border-gray-200 px-2">
                <div className="lg:w-[1260px] max-w-full mx-auto font-mont relative">
                    <h1 className=" text-4xl px-2">Property Investment Information
                    </h1>
                    <span className="px-2 mt-3 text-gray-500 text-md">We provide Amazing Services</span>
                    <ul className="absolute top-1/4 right-0 flex gap-2 text-sm text-gray-700">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        /
                        <li>
                            Property
                        </li>
                    </ul>
                </div>
            </div>
            <section className="py-10">
                <div className="lg:w-[1260px] max-w-full mx-auto font-mont px-2">

                    <div className="lg:flex gap-2 relative">
                        <div className="lg:w-[65%] w-full">
                            <div className="">
                                <Slider {...settings}>
                                    <div className="">
                                        <img src="/images/property1.jpg" className="h-96 w-full object-cover rounded-lg" />
                                    </div>
                                    <div>
                                        <img src="/images/property1.jpg" className="h-96 w-full object-cover rounded-lg" />
                                    </div>
                                    <div>
                                        <img src="/images/property1.jpg" className="h-96 w-full object-cover rounded-lg" />
                                    </div>
                                    <div>
                                        <img src="/images/property1.jpg" className="h-96 w-full object-cover rounded-lg" />
                                    </div>
                                    <div>
                                        <img src="/images/property1.jpg" className="h-96 w-full object-cover rounded-lg" />
                                    </div>
                                    <div>
                                        <img src="/images/property1.jpg" className="h-96 w-full object-cover rounded-lg" />
                                    </div>
                                </Slider>
                            </div>
                            <div className="border rounded-sm border-gray-200 p-4 mt-4">
                                <h3 className="text-xl font-semibold uppercase">Your Participation</h3>
                                <ul className="pt-3">
                                    <li className="flex py-2 border-b">
                                        <span className="flex-1 font-semibold">Minimum Investment Loan Amount - </span>
                                        <span className="flex-1">£ 500</span>
                                    </li>
                                    <li className="flex py-2 border-b">
                                        <span className="flex-1 font-semibold">Profits assumed - </span>
                                        <span className="flex-1">28% Upwards by Developer</span>
                                    </li>
                                    <li className="flex py-2 border-b">
                                        <span className="flex-1 font-semibold">Term -  </span>
                                        <span className="flex-1">16 months (with the ability to pay back early)</span>
                                    </li>
                                    <li className="flex py-2 border-b">
                                        <span className="flex-1 font-semibold">Returns Promised - </span>
                                        <span className="flex-1">Approximately 20% minimum return (Subject to Market Conditions and All going well)</span>
                                    </li>
                                    <li className="flex py-2 border-b">
                                        <span className="flex-1 font-semibold">Payment Return - </span>
                                        <span className="flex-1">End of term</span>
                                    </li>
                                    <li className="flex py-2 border-b">
                                        <span className="flex-1 font-semibold">Borrower Type –  </span>
                                        <span className="flex-1">Experienced developer</span>
                                    </li>
                                    <li className="flex py-2 border-b">
                                        <span className="flex-1 font-semibold">Security Available -  </span>
                                        <span className="flex-1">None</span>
                                    </li>
                                    <li className="flex py-2 border-b">
                                        <span className="flex-1 font-semibold">Risk Accessment -  </span>
                                        <span className="flex-1">Higher Risk</span>
                                    </li>
                                </ul>
                                <p className="pt-3 font-semibold text-gray-500"><strong className="text-black">Note: </strong>* Your capital is at risk and returns are not guaranteed.  Please read the Investment Memorandum before investing.
                                </p>
                            </div>
                            <div className="border rounded-sm border-gray-200 p-4 mt-4">
                                <h3 className="text-xl font-semibold ">INVESTMENT SUMMARY</h3>
                                <ul className="list-disc pl-3 pt-3">
                                    <li>
                                        This is a 16 month residential peer to peer loan opportunity, offering no security to small investors.
                                    </li>
                                    <li>The property will be purchased at Land Auction coming up Soon. Auction Start price is 50,000 without Planning and Developer expect to buy the Land at the cost price of 80K max.</li>
                                    <li>The Developer after buying the plot will put in a Planning application for 2 bedroom Detached Chalet Bungalow with local council.</li>
                                    <li>The Chances of getting Planning application approved is 99%, as confirmed by Developer. (We will hold the Loan money in our account till the Developer does not get Planning approved, incase of no approval, we will return the money to all the investors as registered and paid.)</li>
                                    <li>In the Complete Builders Pack, we will send you all the details from buying the Plot to the final Building Construction and Selling. Monthly Reports will be sent to all investors.</li>
                                    <li>The Developer is expecting a high return of 28% upwards due to the risk he is taking by buying a plot without Planning. He is willing to share profits with all the investors as per their loan investments.</li>
                                    <li>Whilst the term for this investment is 16 months, this project may finish sooner. </li>
                                </ul>
                            </div>
                        </div>
                        <div className="lg:w-[35%] w-full sticky top-0">
                            <div className="border rounded-sm border-gray-200 p-3 relative">
                                <h1 className="font-semibold text-2xl font-lato pr-3">Abu Samra Al Aamriya
                                    Riyadah</h1>
                                <p className="pt-3 flex items-center gap-1">
                                    <Icon icon="teenyicons:search-property-outline" className="text-2xl text-gray-500" />Residential Plot
                                </p>
                                <p className="pt-3 flex items-center gap-1">
                                    <Icon icon="material-symbols:location-on-outline" className="text-2xl text-gray-500" />1A Frognal, Hampstead, London, NW3 6AL
                                </p>
                                <div className="absolute top-3 right-3">
                                    <Icon icon="mdi:favorite-border" className="text-4xl text-red-400" />
                                </div>

                            </div>
                            <div className="border rounded-sm border-gray-200 p-3 mt-4">
                                {/* <div className="p-1 w-32 h-32 mx-auto rounded-full overflow-hidden">
                                    <img src="/images/darkLogo.jpg" className="h-full w-full rounded-full  shadow-md " />
                                </div>
                                <h2 className="text-center text-xl font-semibold py-2 ">Company Name</h2> */}

                                <div className="">
                                    <ul className="py-2">
                                        <li className="mt-2 flex gap-2 items-center justify-between">
                                            <h6 className="text-xl text-[#ffa500] font-lato flex items-center gap-1"><Icon icon="mdi:shield-star-outline" />Total Investment -</h6> <span className="text-md text-blck">£ 5,00,000</span>
                                        </li>
                                        <li className="mt-2 flex gap-2 items-center justify-between">
                                            <h6 className="text-xl text-[#ffa500] font-lato flex items-center gap-1"><Icon icon="mdi:shield-star-outline" />Loan Required -</h6> <span className="text-md text-blck">£ 3,50,000</span>
                                        </li>
                                        <li className="mt-2 flex gap-2 items-center justify-between">
                                            <h6 className="text-xl text-[#ffa500] font-lato flex items-center gap-1"><Icon icon="mdi:shield-star-outline" />Developers Investment -</h6> <span className="text-md text-blck">£ 1,50,000</span>
                                        </li>
                                    </ul>
                                </div>
                                <hr className="shadow-lg my-3" />
                                <div className="py-3">
                                    <div className="overInvester flex items-center justify-between text-xl font-semibold font-lato " >
                                        <span>£5,000</span>
                                        <span>1</span>
                                    </div>
                                    <div className="flex items-center justify-between text-[10px] py-2">
                                        <span>of £250k</span>
                                        <span>Current Investors
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                        <div className="bg-[#ffa500] h-1.5 rounded-full dark:bg-blue-500 w-[25%]"></div>
                                    </div>
                                    <div className="flex items-center justify-between text-[10px] py-2">
                                        <span><strong>2.00%</strong> Funded</span>
                                        <span><strong>46</strong> days left to fund</span>
                                    </div>
                                    <div className="mt-2">
                                        <button className="w-full py-3 bg-[#ffa500] text-white uppercase font-semibold shadow-md rounded-sm">
                                            Register Now
                                        </button>
                                        <p className="py-3">Already have an account?</p>
                                        <button className="w-full py-3 bg-[#ffa500] text-white uppercase font-semibold shadow-md rounded-sm">
                                            Log In
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default ProjectDetails;
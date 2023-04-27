import { Link } from "react-router-dom";
const Importance = ({ heading, whyInvest, howInvest, whatInvest }) => {
    return (
        <section className="section_importance lg:py-16 md:py-8">
            <div className="lg:w-[1260px] max-w-full mx-auto font-mont">
                <div className="text-center  px-[10vw] ">
                    <h2 className="lg:text-[40px] md:text-[30px] text-[22px] font-bold lg:leading-loose leading-relaxed py-4 text-[#151D29FF]">{heading?.wid_heading} </h2>
                </div>
                <div className="lg:w-[14%] w-[25%] border-t-8 border-[#ffa500] mx-auto"></div>
                {/* why*/}
                <div className="why-us md:pt-6 pt-8 px-[5vw]">
                    <div className="md:flex">
                        <div className="lg:w-[15%] md:w-[20%] w-full">
                            <div>
                                <div className="w-full bg-[#e8e4e4] text-center">
                                    <div className="px-4 pt-2">
                                        <h2 className="text-3xl font-bold md:pt-5 md:leading-loose">Why</h2>
                                    </div>
                                    <div className="pb-2 px-4 shadow-shadow1">
                                        <p className="text-lg font-lato">Invest</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[60%] w-full">
                            <div className="w-full">
                                <div className="py-2 lg:px-16 px-5  text-[#151d29ff]">
                                    <h3 className="md:text-3xl text-2xl font-bold leading-relaxed">{whyInvest?.wid_heading}</h3>
                                    <p className="text-lg font-lato "><div
                                        dangerouslySetInnerHTML={{
                                            __html: whyInvest?.wid_details
                                        }}
                                    /></p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[25%] md:w-[20%] w-full text-end p-4">
                            <Link to="/projects/active_items">
                                <button className="bg-[#7230b0] text-white px-11 py-3 rounded-full font-bold font-lato hover:bg-black hover:text-white">Invest</button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/*  how*/}
                <div className="why-us pt-3 px-[5vw]">
                    <div className="h-4 border-t border-gray-200"></div>
                    <div className="md:flex pt-3">
                        <div className="lg:w-[15%] md:w-[20%] w-full">
                            <div>
                                <div className="w-full bg-[#e8e4e4] text-center">
                                    <div className="px-4 pt-2">
                                        <h2 className="text-3xl font-bold md:pt-5 md:leading-loose">How</h2>
                                    </div>
                                    <div className="pb-2 px-4 shadow-shadow1">
                                        <p className="text-lg font-lato">to Invest</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[60%] w-full">
                            <div className="w-full">
                                <div className="py-2 lg:px-16 md:px-5 px-7   text-[#151d29ff]">
                                    <h3 className="md:text-3xl text-2xl font-bold leading-relaxed">{howInvest?.wid_heading}</h3>
                                    <p className="text-lg font-lato"><div
                                        dangerouslySetInnerHTML={{
                                            __html: howInvest?.wid_details
                                        }}
                                    /></p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[25%] md:w-[20%] w-full text-end p-4">
                            <Link to="/projects/active_items">
                                <button className="bg-[#7230b0] text-white px-11 py-3 rounded-full font-bold font-lato hover:bg-black hover:text-white">Invest</button>
                            </Link>                        </div>
                    </div>
                </div>
                {/* What*/}

                <div className="why-us pt-3 px-[5vw]">
                    <div className="h-4 border-t border-gray-200"></div>
                    <div className="md:flex pt-3">
                        <div className="lg:w-[15%] md:w-[20%] w-full">
                            <div>
                                <div className="w-full bg-[#e8e4e4] text-center">
                                    <div className="px-4 pt-2">
                                        <h2 className="text-3xl font-bold md:pt-5 md:leading-loose">What</h2>
                                    </div>
                                    <div className="pb-2 px-4 shadow-shadow1">
                                        <p className="text-lg font-lato">Much</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[60%] w-full">
                            <div className="w-full">
                                <div className="py-2 lg:px-16 md:px-5 px-7  text-[#151d29ff]">
                                    <h3 className="md:text-3xl text-2xl  font-bold leading-relaxed">{whatInvest?.wid_heading}</h3>
                                    <p className="text-lg font-lato"> <p className="text-lg font-lato"><div
                                        dangerouslySetInnerHTML={{
                                            __html: whatInvest?.wid_details
                                        }}
                                    /></p></p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[25%] md:w-[20%] w-full text-end p-4">
                            <Link to="/projects/active_items">
                                <button className="bg-[#7230b0] text-white px-11 py-3 rounded-full font-bold font-lato hover:bg-black hover:text-white">Invest</button>
                            </Link>                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Importance;
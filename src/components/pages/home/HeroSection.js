const HeroSection = ({ heroText, smallScall, smalltime, profit_timing }) => {
    return (
        <section className="hero_bg text-white">
            <div className="lg:w-[1260px] max-w-full mx-auto font-mont">
                <div className="text-center md:p-5 p-2 ">
                    <h2 className="lg:text-[56px] md:text-[32px] text-[22px] font-bold leading-relaxed lg:py-20 md:py-10 md:py-5 py-2">{heroText?.wid_heading}</h2>
                    <p className="md:text-xs text-md lg:font-bold font-semibold">
                        <div
                            dangerouslySetInnerHTML={{ __html: heroText?.wid_details }}
                        />
                    </p>
                </div>
                <div className="lg:w-[14%] w-[25%] border-t-8 border-[#ffa500] mx-auto"></div>
                <div className="lg:h-56 md:h-32 h-8"></div>
                <div className="md:flex">
                    <div className="md:flex-1 bg-[#ffa500]">
                        <div className="lg:px-10 px-3 pt-5 ">
                            <h3 className="lg:text-2xl text-xl font-bold">{smallScall?.wid_heading}</h3>
                        </div>
                        <div className=" lg:px-10 px-3 md:py-5 py-2">
                            <hr className="w-[80%] h-0 mx-auto border-t border-gray-200" />
                        </div>
                        <div className="lg:px-10 px-3 pb-5">
                            <p className="text-lg font-lato text-[#151D29FF]"><div
                                dangerouslySetInnerHTML={{ __html: smallScall?.wid_details }}
                            /></p>
                        </div>
                    </div>
                    <div className="md:flex-1 bg-[#e01467]">
                        <div className="lg:px-10 px-3 pt-5 ">
                            <h3 className="lg:text-2xl text-xl font-bold">{smalltime?.wid_heading}</h3>
                        </div>
                        <div className="lg:px-10 px-3 md:py-5 py-2">
                            <hr className="w-[80%] h-0 mx-auto" />
                        </div>
                        <div className="lg:px-10 px-3 pb-5">
                            <p className="text-lg font-lato text-[#151D29FF]"><div
                                dangerouslySetInnerHTML={{ __html: smalltime?.wid_details }}
                            /> </p>
                        </div>
                    </div>
                    <div className="md:flex-1 bg-[#7230b0]"><div className="lg:px-10 px-3 pt-5 ">
                        <h3 className="lg:text-2xl text-xl font-bold">{profit_timing?.wid_heading}</h3>
                    </div>
                        <div className="lg:px-10 px-3 md:py-5 py-2">
                            <hr className="w-[80%] h-0 mx-auto" />
                        </div>
                        <div className="lg:px-10 px-3 pb-5">
                            <p className="text-lg font-lato text-[#151D29FF]"> <p className="text-lg font-lato text-[#151D29FF]"><div
                                dangerouslySetInnerHTML={{ __html: profit_timing?.wid_details }}
                            /> </p> </p>
                        </div></div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;
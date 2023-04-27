import { Link } from "react-router-dom"
const InvestGuide = ({ data }) => {
    return (
        <section className="section_guide">
            <div className="lg:w-[1260px] max-w-full mx-auto font-mont md:py-10 py-6">
                <div className="text-center  px-[5vw] ">
                    <h2 className="lg:text-[40px] md:text-[32px] text-[22px] font-bold md:leading-loose py-4 text-[#151D29FF]">{data?.wid_heading}</h2>
                </div>
                <div className="lg:w-[14%] w-[25%] border-t-8 border-[#ffa500] mx-auto"></div>

                <div className="px-[5vw] ">
                    {/* <ul className="lg:px-28 md:px-14 px-6 py-5 list-disc">
                        <li className="font-xl font-lato leading-relaxed text-[#151D29FF] ">
                            This is a high-risk investment or Loan. You may not be able to access your money easily and are unlikely to be protected if something goes wrong.<br />Our platform connects investors and property professionals through various projects, providing access to UK property investments/Loans.
                        </li>
                        <li className="font-xl font-lato leading-relaxed text-[#151D29FF] ">
                            By participating in 'live' projects, investors can access property investment opportunities and gain knowledge about different property strategies.                        </li>
                        <li className="font-xl font-lato leading-relaxed text-[#151D29FF] ">
                            Our platform helps fund developers' projects, enabling them to build more homes, increase their brand presence, and expand their investor community.                        </li>
                        <li className="font-xl font-lato leading-relaxed text-[#151D29FF] ">
                            Our recommended team, consisting of experienced property developers and architects, enjoys what we do and has expertise in buy-to-lets, renovations, empty property conversions, new builds, and HMOs in the UK.                        </li>
                        <li className="font-xl font-lato leading-relaxed text-[#151D29FF] ">Our focus area is Greater London within the M25 route, where the property market has a higher rate of selling and buying.</li>
                        <li className="font-xl font-lato leading-relaxed text-[#151D29FF] ">Investors must understand that they are investing or loaning at their own risk and should only use proper banking channels to transfer their funds. They should also check local laws in their country regarding making investments or loans according to their country's laws.</li>
                    </ul> */}
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data?.wid_details
                        }}
                    />
                    <div className="text-center pt-10">
                        <Link to="/projects/active_items">
                            <button className="Check Details and Projects with T&C Here bg-[#7230b0] px-11 py-4 text-white font-bold rounded-full hover:bg-black hover:text-white leading-none">Check Details and Projects with T&C Here</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default InvestGuide
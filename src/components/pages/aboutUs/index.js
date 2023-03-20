import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <>
            <div className="contact_bread_crumb lg:py-8 lg:py-6 py-4 bg-gray-100 border-b  border-gray-200 px-2">
                <div className="lg:w-[1260px] max-w-full mx-auto font-mont relative">
                    <h1 className=" lg:text-4xl md:text-2xl text-2xl px-2">About Us</h1>
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
                    <div className=" items-center">
                        <div className="lg:float-right lg:mt-5 mx-auto lg:w-96 md:w-84 w-64 lg:ml-7 relative before:absolute before:w-72 before:z-0 before:h-32 before:content-[''] before:top-10 before:border-8 before:border-b-0 before:left-1/2 before:-translate-x-1/2 before:border-[#ffa500] after:absolute after:h-32 after:w-72 after:content-[''] after:border-[#ffa500] after:border-8 after:left-1/2 after:-translate-x-1/2 after:bottom-10 after:border-t-0 after:z-20">
                            <img src="/images/About-Us.png" className="h-80 mx-auto relative z-10" alt="about_img" />
                        </div>
                        <div className="pt-2">
                            <h1 className="lg:text-[32px] md:text-[28px] text-[20px] font-bold text-[#151D29FF] pb-2 font-lato">Story of V-Crowd Fund</h1>
                            <p className="md:text-lg text-md text-gray-800 text-justify">
                                Initially, we commenced our endeavors as Builders in London, specializing in the renovation of residential properties. Gradually, we expanded our repertoire to include the construction of extensions and loft conversions.
                                Following a few years of prosperous operations, we recognized that clients often devote substantial resources in their quest for individuals who could obtain planning permission for their home extensions and lofts.
                                As a result, in 2015, we commenced offering Design & Build solutions to clients, encompassing end-to-end services. Subsequently, we embarked on building new houses on plots of land, which we accomplished triumphantly, and delivering projects for investors.
                            </p>
                            <p className="md:text-lg text-md text-gray-800 text-justify">
                                It became evident to us those investors were typically individuals with available large funds who could invest in a project entirely on their own, and even banks and financial institutions were eager to provide financing to them.<br />Essentially, those with financial resources also had access to institutional financing.
                                Essentially, those with financial resources also had access to institutional financing. <br />However, after a few years, we contemplated undertaking our own development projects from inception to completion. Despite lacking sufficient funds for the project, securing funding from banks proved to be quite challenging, especially since we were first-time developers.<br />Regrettably, we were forced to abandon our inaugural project due to our inability to secure sufficient funds.
                                <br />
                                Subsequently, one of our investors procured the same plot of land and engaged our services for the construction of a new property. As we had already prepared every details, the investor realized an impressive profit of nearly 50% on the project.
                                The location of this project was Uxbridge, with the land being purchased for £1.20K and the construction expenses amounting to £1.50K. Ultimately, the completed residence was sold for £500K. This served as a valuable learning experience for us, as we committed ourselves to the project as if it were our own, and the investor expressed immense satisfaction with our performance.
                                <br />Due to insufficient funds, we were unable to undertake a complete project in London. Therefore, we made the decision to pursue a project in Birmingham, where the costs were lower and an opportunity existed to see the project through to completion. With an investment of £1.20K, we successfully executed a modest project, yielding a profit of 23%.<br />
                                <br />Subsequently, we returned to London with the goal of undertaking similar project but back in Big Dream Town.<br />
                                We communicated our intentions to friends and colleagues, inviting them to contribute and become partners with any amount of investment they were comfortable with.<br />
                                Our first project partner was a friend who had only £500 in spare funds, as he held a modest income. <br />Despite having long desired to invest in property, he had never been presented with the opportunity to do so as a small investor.<br />
                                This served as the impetus for our concept of launching a V-Crowd Funding Platform, where individuals of all types, ranging from small to medium investors, could contribute and invest through unsecured loans.<br />We got investments ranging from £500 to £10,000 for that London project with 32 investors contributing in with small & medium investments, which enabled us to complete the London project and achieve a commendable 25% profit that was subsequently distributed back to all.
                                <br />
                                Presently, our build company intends to utilize this platform to propose a project in London as a borrower.
                                <br />
                                While we welcome other developers to leverage this platform for fundraising, they will be subject to rigorous checks before being accepted. We will only consider a property development project after conducting a comprehensive due diligence process.
                                <br />

                                Individuals of any nationality and residing in any country are welcome to invest in this opportunity, as long as payment is made through a bank or debit card in Sterling Pounds according to legal procedures.
                                <br />
                                Our investment program has a minimum investment of £500 and a maximum of £5000 per investor.
                                <br />
                                If Anyone wishes to become an equity partner in the project, then minimum investment on that project will be 10% and the details can be requested by email to the developer using : Invest@vcrowdfund.com
                                We will pass your contact details to the builder and he will thereby contact you directly.
                                <br />
                                We regret that we are unable to accept investments from companies, societies, or financial institutions, and advise all investors to only invest personally.
                                <br />
                                As the loan is unsecured and high risk, we strongly advise against investing pension or retirement funds.
                                <br />
                                As an independent website, any clicks or investments made by investors are at their own discretion and risk. We cannot be held liable for any claims or losses incurred as a result of such investments.<br />
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
export default AboutUs;
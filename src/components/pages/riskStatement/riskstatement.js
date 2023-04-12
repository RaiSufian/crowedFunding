import { Link, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
const Riskstatement = () => {

    const navigate = useNavigate();
    return (
        <>
        < Helmet >
            <title>Risk statement investment | The Future of Property Investment</title>
            </Helmet>
            <div className="contact_bread_crumb lg:py-8 lg:py-6 py-4 bg-gray-100 border-b  border-gray-200 px-2">

                <div className="lg:w-[1260px] max-w-full mx-auto font-mont relative">
                    <h1 className="lg:text-4xl md:text-2xl text-2xl px-2">Risk Statement</h1>
                    <span className="px-2 mt-3 text-gray-500 text-md">We provide Amazing Services</span>
                    <ul className="absolute top-1/4 right-0 flex gap-2 text-sm text-gray-700">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        /
                        <li>
                            risk statement
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="lg:w-[1240px] max-w-full mx-auto lg:py-10 md:py-8 py-4 px-3">
                    <span className="underline cursor-pointer" onClick={() => navigate(-1)}>Go Back</span>
                    <h2 className="md:py-5 py-2 lg:text-[40px] md:text-[30px] text-[28px] font-bold text-center text-[#151D29FF]">
                        Risk Statement
                    </h2>
                    <div className="lg:w-[14%] w-[25%] border-t-8 border-[#ffa500] mx-auto mb-10"></div>

                    <div className="xl:px-40 lg:px-10 md:px-3 px-2">
                        <ol className=" text-xl text-justify">
                            <li className="py-2">
                                <h6 className="text-2xl font-semibold">1. Capital Risk</h6>
                                <p className="text-lg">
                                    Capital Risk: You might lose the money that you put in. The loans are secured against UK property, but property prices can go down and you might lose your money. Only invest what you can afford to lose, and you won't get compensation if you do lose money.</p>
                            </li>
                            <li className="py-2">
                                <h6 className="text-2xl font-semibold">2. Credit Risk</h6>
                                <p className="text-lg">
                                    Credit Risk: The risk that a borrower will not pay back their loan, so you might lose some or all of the money you invested. The loans are assessed carefully, but there is still a risk that the borrower might not repay.</p>
                            </li>
                            <li className="py-2">
                                <h6 className="text-2xl font-semibold">3. Security Risk</h6>
                                <p className="text-lg">
                                    Security Risk: The risk that the security used to guarantee your loan might not be enough to cover the money you invested and the interest you're due to earn</p>
                            </li>
                            <li className="py-2">
                                <h6 className="text-2xl font-semibold">4. Illiquity Risk</h6>
                                <p className="text-lg">
                                    Illiquity Risk: You might not be able to access your money and interest quickly because there is no option to sell your investment to other investors. You'll have to wait until the loan is repaid</p>
                            </li>
                            <li className="py-2">
                                <h6 className="text-2xl font-semibold">5. Operator Risk</h6>
                                <p className="text-lg">
                                    Operator Risk: If the platform operator stops trading, there might be a risk that borrower repayments can't be managed, so your money wouldn't be safe. Your money is not part of their assets, so you wouldn't be able to get it back if the company went bankrupt.</p>
                            </li>
                            <li className="py-2">
                                <h6 className="text-2xl font-semibold">6. Portfolio Risk</h6>
                                <p className="text-lg">
                                    Portfolio Risk: The risk that you don't spread your investment across enough loans, which increases your exposure to risk. Investing in different loans and with different loan terms reduces risk.</p>
                            </li>
                            <li className="py-2">
                                <h6 className="text-2xl font-semibold">7. Performance Risk</h6>
                                <p className="text-lg">
                                    Performance Risk: Past success doesn't guarantee future success. The value of property may go down, so you might lose the money you invested. If you're not sure about a loan, the borrower, or the property, get some independent advice before investing.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Riskstatement;
import { Link, useNavigate } from 'react-router-dom';
const Disclaimer = () => {
    const navigate = useNavigate();
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
                <div className="lg:w-[1240px] max-w-full mx-auto lg:py-10 md:py-8 py-4 px-3">
                    {/* <span className="underline cursor-pointer" onClick={() => navigate(-1)}>Go Back</span> */}
                    <h2 className="md:py-5 py-2 lg:text-[40px] md:text-[30px] text-[28px] font-bold text-center text-[#151D29FF]">
                        Disclaimer
                    </h2>
                    <div className="lg:w-[14%] w-[25%] border-t-8 border-[#ffa500] mx-auto mb-10"></div>

                    <div className="xl:px-40 lg:px-10 md:px-3 px-2">
                        <ul className="list-disc text-xl text-justify">
                            <li className="py-2">
                                <h6 className="text-2xl font-semibold">Legal Disclaimer</h6>
                                <p className="text-lg">
                                    Please read the following terms and conditions carefully, that govern your access and use of this website. By accessing or using this website, you agree to be bound by these terms and conditions and accept them in full, as they may be modified by  <Link to="/" className="text-[#ffa500] font-semibold">V-web </Link> from time-to-time and posted on this website. No Warranties.
                                    Although  <Link to="/" className="text-[#ffa500] font-semibold">V-web </Link> attempts to provide accurate information, names, images, pictures, logos, icons, documents, and materials (collectively, the “Contents”) on the website, it makes no representation, endorsement, or warranty that such Contents are accurate or suitable for any particular purpose.
                                    This website may contain inaccuracies and typographical and clerical errors.  <Link to="/" className="text-[#ffa500] font-semibold">V-web </Link> expressly disclaims any obligation(s) to update this website or any of the materials on this website. The website and its contents are provided on an “as is” basis. Use of the website and its contents is at the user’s sole risk. The website and its contents are provided without any representations, endorsements, or warranties of any kind whatsoever, either expressed or implied, including, but not limited to, any warranties of title or accuracy and any implied warranties of non-infringement, merchantability and fitness for a particular purpose, with the sole exception of warranties (if any) which cannot be expressly excluded under applicable law. There is no warranty of any kind, express or implied, regarding third party content. This website is for informational purposes only and should not be construed as technical advice of any manner.</p>
                            </li>
                            <li className="py-2">
                                <h6 className="text-2xl font-semibold">Limitation of Liability</h6>
                                <p className="text-lg">
                                    In no event shall <Link to="/" className="text-[#ffa500] font-semibold">V-web </Link> be liable to any entity for any damages, including, without limitation, indirect, incidental, special, consequential or punitive damages, whether under a contract, any other theory of liability, arising in connection with any party’s use of the website or in connection with any failure of performance, error, omission, interruption, defect, delay in operation or transmission, computer virus, line system failure, loss of data, or loss of use related to this website or any website operated by any third party or any content of this website or any other website, even if <Link to="/" className="text-[#ffa500] font-semibold">V-web </Link> is aware of the possibility of such damages.</p>
                            </li>
                            <li className="py-2">
                                <h6 className="text-2xl font-semibold">Links to Other Websites</h6>
                                <p className="text-lg">
                                    <Link to="/" className="text-[#ffa500] font-semibold">V-web </Link> may link this website with one or more websites operated by third parties. <Link to="/" className="text-[#ffa500] font-semibold">V-web </Link> has no control over any such other websites, the contents therein offered. The existence of any such links shall not constitute an endorsement, representation or warranty by us of such websites, the contents of the websites, the products or services of the websites or the operators of the websites. <Link to="/" className="text-[#ffa500] font-semibold">V-web </Link> disclaims responsibility for the privacy policies and customer information practices of third-party internet sites hyperlinked to our sites.</p>
                            </li>
                            <li className="py-2">
                                <h6 className="text-2xl font-semibold">Copyrights and Other Intellectual Property</h6>
                                <p className="text-lg">
                                    Except where otherwise expressly noted, all Content of this website, including graphics, icons and overall appearance of the website, are the sole and exclusive property of <Link to="/" className="text-[#ffa500] font-semibold">V-web </Link>.</p>
                            </li>
                            <li className="py-2">
                                <h6 className="text-2xl font-semibold">Use of Website</h6>
                                <p className="text-lg">
                                    Contents are included in this website solely for the personal use of website users. You may not copy (other than a copy for personal use), modify, distribute, transmit, display, perform, reproduce, transfer, resell, or republish any of the Contents of this website without the prior written consent of <Link to="/" className="text-[#ffa500] font-semibold">V-web </Link>, which may be withheld in its sole discretion</p>
                            </li>
                            <li className="py-2">
                                <h6 className="text-2xl font-semibold">Modifications</h6>
                                <p className="text-lg">
                                    <Link to="/" className="text-[#ffa500] font-semibold">V-web </Link> may, at any time, make modifications, changes, and alterations to the Contents of this website, including these terms and conditions, without prior notice. You are responsible for regularly reviewing these terms and conditions. Your continued use of this website following any modifications, changes, or alterations shall constitute your acceptance of such modifications, changes, or alterations..</p>
                            </li>
                            <li className="py-2">
                                <h6 className="text-2xl font-semibold">DemnityIns</h6>
                                <p className="text-lg">
                                    You agree to indemnify and hold harmless V-web, its subsidiaries and affiliates from any claim, cost, expense, judgment or other loss relating to Your use of this website in any manner, including without limitation of the foregoing, any action You take which is in violation of the terms and conditions of these Terms of Use and against any applicable law.
                                </p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Disclaimer;
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { useEffect, useState } from "react";
import { endload, startload } from '../../redux/slice/loader';
import { useDispatch } from 'react-redux';
import axios from "axios";

const FAQs = () => {
    const dispatch = useDispatch();
    const [faqs, setFaqs] = useState([]);

    const faqData = async () => {
        try {
            await axios.get("index.php?action=get_faqs").then((resp) => {
                // console.log("faq api result is", resp.data.data);
                setFaqs(resp.data.data);
                dispatch(endload());
            })
        }
        catch (error) {
            console.log("get faqs data error", error)
        }
    }
    useEffect(() => {
        dispatch(startload());
        faqData();
    }, [])

    return (
        <>
            < Helmet >
                <title>Crowd Fund House London | Small Investment in London Property Market</title>
            </Helmet>
            <div className="contact_bread_crumb lg:py-8 lg:py-6 py-4 bg-gray-100 border-b  border-gray-200 px-2">
                <div className="lg:w-[1260px] max-w-full mx-auto font-mont relative">
                    <h1 className=" lg:text-4xl md:text-2xl text-2xl px-2">FAQs</h1>
                    <span className="px-2 mt-3 text-gray-500 text-md">We provide Amazing Services</span>
                    <ul className="absolute top-1/4 right-0 flex gap-2 text-sm text-gray-700">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        /
                        <li>
                            Contacts
                        </li>
                    </ul>
                </div>
            </div>
            <div className="lg:w-[1260px] max-w-full mx-auto font-mont relative px-2">
                <div className="py-6">
                    <div className="lg:pt-10 md:pt-6 pt-4">
                        <h2 className="lg:text-4xl md:text-2xl text-xl text-center lg:pb-10 md:pb-6 pb-4 font-mont font-bold">List of Frequently Asked Questions</h2>
                        <div className="lg:w-[14%] w-[25%] border-t-8 border-[#ffa500] mx-auto mb-10"></div>
                        <div className="lg:mx-10 md:mx-5 md-2 border border-gray-200 rounded-md p-2">
                            <div id="accordionFlushExample ">
                                {faqs.map((item, index) => {
                                    return (
                                        <>
                                            <div
                                                class="font-lato rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800" key={index}>
                                                <h2 class="mb-0" id="flush-headingOne">
                                                    <button
                                                        class="group relative flex w-full items-center  border-l-4 border-[#FFA500] rounded-none border-0 bg-white py-4 lg:px-5 px-2 text-left lg:text-2xl md:text-xl text-md text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] "
                                                        type="button"
                                                        data-te-collapse-init
                                                        data-te-target="#flush-collapseOne"
                                                        aria-expanded="false"
                                                        aria-controls="flush-collapseOne">
                                                        {item.faq_question}
                                                        <span
                                                            class="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke-width="1.5"
                                                                stroke="currentColor"
                                                                class="h-6 w-6">
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </h2>
                                                <div
                                                    id="flush-collapseOne"
                                                    class="!visible border-0"
                                                    data-te-collapse-item
                                                    data-te-collapse-show
                                                    aria-labelledby="flush-headingOne"
                                                    data-te-parent="#accordionFlushExample">
                                                    <div class="py-4 px-5">
                                                        {item.faq_answer
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FAQs;
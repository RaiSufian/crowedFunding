import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import * as te from 'tw-elements';

const ContactUs = () => {
    return (
        <>
            <div className="contact_bread_crumb py-8 bg-gray-100 border-b  border-gray-200 px-2">
                <div className="lg:w-[1260px] max-w-full mx-auto font-mont relative">
                    <h1 className=" text-4xl px-2">Contact Us</h1>
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
            <div className=" lg:w-[1260px] max-w-full mx-auto lg:py-10 md:py-8 py-4 px-2 ">
                <h2 className="py-5 lg:text-[40px] md:text-[30px] text-[28px] font-bold text-center text-[#151D29FF]">
                    Get in touch
                </h2>
                <div className="lg:flex">
                    <div className="lg:w-[40%] px-5">
                        <h4 className="uppercase text-2xl font-bold text-gray-600 py-2">Don't be shy</h4>
                        <p>Fell free to get in touch with me. I am always open to discussing new projects. Creative ideas or opportunties to be part of your visions</p>
                        <ul className="py-2">
                            <li className="flex items-center gap-3 pt-3">
                                <span className="bg-[#ffa500] p-1 rounded-full"><Icon icon="ic:outline-email" className="text-4xl text-white " /></span>   <a href="">temp@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-3 pt-3">
                                <span className="bg-[#ffa500] p-1 rounded-full"><Icon icon="material-symbols:phone-in-talk-outline" className="text-4xl text-white " /></span>   <a href="">+44 123 456 65</a>
                            </li>
                            <li className="flex items-center gap-3 pt-3">
                                <span className="bg-[#ffa500] p-1 rounded-full"><Icon icon="ic:outline-email" className="text-4xl text-white " /></span>   <a href="">temp@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-[60%] px-5 lg:px-1">
                        <form>
                            <div className="pt-3">
                                <input type="text" placeholder="Name" className=" w-full h-12 py-1 px-2 bg-gray-100" required />
                            </div>
                            <div className="pt-3">
                                <input type="email" placeholder="Email" className="w-full h-12 py-1 px-2 bg-gray-100" required />
                            </div>
                            <div className="pt-3">
                                <input type="number" placeholder="Phone" className="w-full h-12 py-1 px-2 bg-gray-100" required />
                            </div>
                            <div className="pt-3">
                                <textarea placeholder="Enter your message " className="w-full h-28 py-1 px-2 bg-gray-100"></textarea>
                            </div>
                            <div className="pt-3">
                                <input type="submit" value="Send" className="w-2/6 h-12 py-1 px-2 bg-[#7230b0] text-white rounded-full text-xl" />
                            </div>

                        </form>
                    </div>
                </div>
                <div className="pt-10">
                    <h2 className="text-4xl text-center py-4 font-bold">Frequently Asked Questions</h2>
                    <div className="mx-10 border border-gray-200 rounded-md p-2">

                        <div id="accordionFlushExample">
                            <div
                                class="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 class="mb-0" id="flush-headingOne">
                                    <button
                                        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-target="#flush-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        What is peer-to-peer lending?
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
                                    <div class="py-4 px-5 shadow-md">
                                        Peer-to-peer lending is a way for people to lend money directly to other people who need it. This is done through a website that connects borrowers and lenders. This way, people who need money can get it without having to go through a bank. Lenders can choose who they want to lend money to and make their own investment decisions.
                                    </div>
                                </div>
                            </div>
                            <div
                                class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 class="mb-0" id="flush-headingTwo">
                                    <button
                                        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target="#flush-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                        Who is V ?
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
                                    id="flush-collapseTwo"
                                    class="!visible hidden border-0"
                                    data-te-collapse-item
                                    aria-labelledby="flush-headingTwo"
                                    data-te-parent="#accordionFlushExample">
                                    <div class="py-4 px-5 shadow-md">
                                        V Crowd fund – is a platform to raise money for individual & property developers through unsecured private loans.<br />
                                        V-web also raises the money for its own property residential building projects.
                                    </div>
                                </div>
                            </div>
                            <div
                                class=" rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 class="mb-0" id="flush-headingThree">
                                    <button
                                        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target="#flush-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        Do V have experience in property?
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
                                    id="flush-collapseThree"
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    aria-labelledby="flush-headingThree"
                                    data-te-parent="#accordionFlushExample">
                                    <div class="py-4 px-5">
                                        Yes. The team at has good experience in the property sector. This experience includes property investment, property development and property sourcing across the UK. V-web has a Building company which only does these kind of development projects.
                                    </div>
                                </div>
                            </div>
                            <div
                                class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 class="mb-0" id="flush-headingFour">
                                    <button
                                        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target="#flush-collapseFour"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseFour">
                                        What is the minimum amount I can invest?
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
                                    id="flush-collapseFour"
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    aria-labelledby="flush-headingFour"
                                    data-te-parent="#accordionFlushExample">
                                    <div class="py-4 px-5">
                                        The minimum investment amount is currently £500. Please read the Risk Warning carefully on the platform and if you cannot afford to lose your investment, you should not invest.
                                    </div>
                                </div>
                            </div>
                            <div
                                class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 class="mb-0" id="flush-headingFive">
                                    <button
                                        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target="#flush-collapseFive"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseFive">
                                        Can I invest using different currencies?
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
                                    id="flush-collapseFive"
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    aria-labelledby="flush-headingFive"
                                    data-te-parent="#accordionFlushExample">
                                    <div class="py-4 px-5">
                                        No. Investments on our platform are required to be made in sterling (GBP)
                                    </div>
                                </div>
                            </div>
                            <div
                                class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 class="mb-0" id="flush-headingSix">
                                    <button
                                        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target="#flush-collapseSix"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseSix">
                                        I'm not a UK resident, can I invest?
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
                                    id="flush-collapseSix"
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    aria-labelledby="flush-headingSix"
                                    data-te-parent="#accordionFlushExample">
                                    <div class="py-4 px-5">
                                        Yes. You will still have to understand that this a Risky proposal, and you are ready to loose the money invested through unsecured loan incase anything happens.
                                    </div>
                                </div>
                            </div>
                            <div
                                class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 class="mb-0" id="flush-headingSeven">
                                    <button
                                        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target="#flush-collapseSeven"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseSeven">
                                        Can I withdraw my investment capital early if needed?
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
                                    id="flush-collapseSeven"
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    aria-labelledby="flush-headingSeven"
                                    data-te-parent="#accordionFlushExample">
                                    <div class="py-4 px-5">
                                        Our Website, you commit to investing that money for the full term of that loan and until repayment is attained. During this time, it is not possible to withdraw the original investment amount early.
                                    </div>
                                </div>
                            </div>
                            <div
                                class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 class="mb-0" id="flush-heading9">
                                    <button
                                        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target="#flush-collapse9"
                                        aria-expanded="false"
                                        aria-controls="flush-collapse8">
                                        When do I get my capital back?
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
                                    id="flush-collapse9"
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    aria-labelledby="flush-heading9"
                                    data-te-parent="#accordionFlushExample">
                                    <div class="py-4 px-5">
                                        Your investment will be returned to you once the borrower pays back the loan. If the borrower makes a partial payment towards the loan amount during the loan period, you will receive a partial repayment based on your original investment.
                                    </div>
                                </div>
                            </div>
                            <div
                                class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 class="mb-0" id="flush-heading10">
                                    <button
                                        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target="#flush-collapse10"
                                        aria-expanded="false"
                                        aria-controls="flush-collapse10">
                                        How will my investment be used?
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
                                    id="flush-collapse10"
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    aria-labelledby="flush-heading19"
                                    data-te-parent="#accordionFlushExample">
                                    <div class="py-4 px-5">
                                        Your investment will be added to the total loan raise on the project you choose. When fully funded, the loan amount will be released in tranches to the borrower to carry out works on their property/land.
                                    </div>
                                </div>
                            </div>
                            <div
                                class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 class="mb-0" id="flush-heading11">
                                    <button
                                        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target="#flush-collapse11"
                                        aria-expanded="false"
                                        aria-controls="flush-collapse11">
                                        When will I get my money back?
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
                                    id="flush-collapse11"
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    aria-labelledby="flush-heading11"
                                    data-te-parent="#accordionFlushExample">
                                    <div class="py-4 px-5">
                                        After the borrower pays back the loan, you will receive both the interest and capital on your loan investment at the end of the loan term. The interest will be paid directly to your Bank (as per details provided), and you will be notified once it's been paid.
                                    </div>
                                </div>
                            </div>
                            <div
                                class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 class="mb-0" id="flush-heading12">
                                    <button
                                        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target="#flush-collapse12"
                                        aria-expanded="false"
                                        aria-controls="flush-collapse12">
                                        Are V FCA regulated?
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
                                    id="flush-collapse12"
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    aria-labelledby="flush-heading12"
                                    data-te-parent="#accordionFlushExample">
                                    <div class="py-4 px-5">
                                        No, We are not regulated by any body as per current scenario.
                                    </div>
                                </div>
                            </div>
                            <div
                                class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 class="mb-0" id="flush-heading13">
                                    <button
                                        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target="#flush-collapse13"
                                        aria-expanded="false"
                                        aria-controls="flush-collapse13">
                                        What are the Risks?
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
                                    id="flush-collapse13"
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    aria-labelledby="flush-heading13"
                                    data-te-parent="#accordionFlushExample">
                                    <div class="py-4 px-5">
                                        As with many investment options, there is a element of risk involved with investing in peer to peer loans. Your capital is at risk and you may lose all you lend. See our Risk Statement for more information.
                                    </div>
                                </div>
                            </div>
                            <div
                                class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 class="mb-0" id="flush-heading14">
                                    <button
                                        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target="#flush-collapse14"
                                        aria-expanded="false"
                                        aria-controls="flush-collapse14">
                                        Is my money at risk when investing on the platform?
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
                                    id="flush-collapse14"
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    aria-labelledby="flush-heading14"
                                    data-te-parent="#accordionFlushExample">
                                    <div class="py-4 px-5">
                                        Your money is fully at risk, so we recommend that you carefully read our Risk Statement and thoroughly review the loan opportunity before deciding to invest. Please make sure you only invest an amount that you can afford to lose in P2P loans.
                                    </div>
                                </div>
                            </div>
                            <div
                                class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 class="mb-0" id="flush-heading13">
                                    <button
                                        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target="#flush-collapse15"
                                        aria-expanded="false"
                                        aria-controls="flush-collapse15">
                                        Do I have a shareholding (equity) in the projects I invest into?
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
                                    id="flush-collapse15"
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    aria-labelledby="flush-heading15"
                                    data-te-parent="#accordionFlushExample">
                                    <div class="py-4 px-5">
                                        Sorry, There is no equity in the loans.  The V-website only operates as a peer-to-peer lending business, and only deals with debt. This means that every investment made will be in the form of a loan for the specified project and the returns will come as interest on the loaned capital.
                                    </div>
                                </div>
                            </div>
                            <div
                                class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 class="mb-0" id="flush-heading16">
                                    <button
                                        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target="#flush-collapse16"
                                        aria-expanded="false"
                                        aria-controls="flush-collapse16">
                                        Can I invest using my pension?
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
                                    id="flush-collapse16"
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    aria-labelledby="flush-heading16"
                                    data-te-parent="#accordionFlushExample">
                                    <div class="py-4 px-5">
                                        No, we do not want you to invest your pension fund into any loan. We will also advice you to never use your pension funds for any unsecured lending on our website. As this investment carries a big risk.
                                    </div>
                                </div>
                            </div>
                            <div
                                class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 class="mb-0" id="flush-heading17">
                                    <button
                                        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target="#flush-collapse17"
                                        aria-expanded="false"
                                        aria-controls="flush-collapse17">
                                        How does V-website make money?
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
                                    id="flush-collapse17"
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    aria-labelledby="flush-heading17"
                                    data-te-parent="#accordionFlushExample">
                                    <div class="py-4 px-5">
                                        V-web makes its money through charging fees to borrowers. Typically, V-web will charge an Arrangement Fee on any loans to borrowers. These fees will cover our operating, transaction, management and monitoring costs. These fees are clearly informed to the borrower before any deal.
                                    </div>
                                </div>
                            </div>
                            <div
                                class="rounded-none border border-l-0  border-b-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 class="mb-0" id="flush-heading17">
                                    <button
                                        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target="#flush-collapse17"
                                        aria-expanded="false"
                                        aria-controls="flush-collapse17">
                                        Is the interest that I earn taxed?
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
                                    id="flush-collapse17"
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    aria-labelledby="flush-heading17"
                                    data-te-parent="#accordionFlushExample">
                                    <div class="py-4 px-5">
                                        The interest you earn from your Lending investments at V-web is paid gross, with no tax deducted. Interest earned from any loan is taxable, You have to take responsibility for declaring this income and your own tax affairs. We advise you to seek independent professional advice on how to do this if you are unsure.                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}
export default ContactUs;
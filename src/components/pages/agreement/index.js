import { Link, useNavigate } from "react-router-dom";
const Agreement = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="contact_bread_crumb lg:py-8 lg:py-6 py-4 bg-gray-100 border-b  border-gray-200 px-2">
                <div className="lg:w-[1260px] max-w-full mx-auto font-mont relative">
                    <h1 className="lg:text-4xl md:text-2xl text-2xl px-2">Agreement</h1>
                    <span className="px-2 mt-3 text-gray-500 text-md">We provide Amazing Services</span>
                    <ul className="absolute top-1/4 right-0 flex gap-2 text-sm text-gray-700">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        /
                        <li>
                            Agreement
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="lg:w-[1240px] max-w-full mx-auto lg:py-10 md:py-8 py-4 px-3">
                    {/* <span className="underline cursor-pointer" onClick={() => navigate(-1)}>Go Back</span> */}
                    <h2 className="md:py-5 py-2 lg:text-[40px] md:text-[30px] text-[28px] font-bold text-center text-[#151D29FF]">
                        Agreement
                    </h2>
                    <div className="lg:w-[14%] w-[25%] border-t-8 border-[#ffa500] mx-auto mb-10"></div>

                    <div className="xl:px-40 lg:px-10 md:px-3 px-2">
                        <ul className="list-disc text-xl text-justify">

                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus tortor a felis dignissim lobortis. Aliquam aliquet eros non lacinia viverra. Integer non varius nisi. Suspendisse cursus finibus dapibus. Pellentesque laoreet venenatis posuere. Nulla placerat quis lacus eu pulvinar. Nullam tincidunt arcu ac porttitor auctor.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus tortor a felis dignissim lobortis. Aliquam aliquet eros non lacinia viverra. Integer non varius nisi. Suspendisse cursus finibus dapibus. Pellentesque laoreet venenatis posuere. Nulla placerat quis lacus eu pulvinar. Nullam tincidunt arcu ac porttitor auctor.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus tortor a felis dignissim lobortis. Aliquam aliquet eros non lacinia viverra. Integer non varius nisi. Suspendisse cursus finibus dapibus. Pellentesque laoreet venenatis posuere. Nulla placerat quis lacus eu pulvinar. Nullam tincidunt arcu ac porttitor auctor.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus tortor a felis dignissim lobortis. Aliquam aliquet eros non lacinia viverra. Integer non varius nisi. Suspendisse cursus finibus dapibus. Pellentesque laoreet venenatis posuere. Nulla placerat quis lacus eu pulvinar. Nullam tincidunt arcu ac porttitor auctor.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus tortor a felis dignissim lobortis. Aliquam aliquet eros non lacinia viverra. Integer non varius nisi. Suspendisse cursus finibus dapibus. Pellentesque laoreet venenatis posuere. Nulla placerat quis lacus eu pulvinar. Nullam tincidunt arcu ac porttitor auctor.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus tortor a felis dignissim lobortis. Aliquam aliquet eros non lacinia viverra. Integer non varius nisi. Suspendisse cursus finibus dapibus. Pellentesque laoreet venenatis posuere. Nulla placerat quis lacus eu pulvinar. Nullam tincidunt arcu ac porttitor auctor.
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Agreement;
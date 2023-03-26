import { Link } from "react-router-dom";
const ProjectCard = () => {
    return (

        <div className="w-full px-2 mt-5">
            <div className="border border-[#ffa500]">
                <img src="/images/property1.jpg" className="h-36 w-full object-cover" />
                <div className="md:h-28 h-36">
                    <h4 className="px-3 pt-3 text-xl font-semibold">Refurbishment  Opportunity</h4>
                    <p className="px-3 text-sm "> COMING TO PLATFORM*** COMING TO PLATFORM *** Short-term refurbishment opportunity.  ISA friendly investment. </p>
                </div>
                <div className="px-2">
                    <p className="font-bold text-center  m-1 pb-1">0 Hour to go - 100.00%</p>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mb-3">
                        <div className="bg-[#ffa500] h-1.5 rounded-full w-[25%]"></div>
                    </div>
                    <div className=" py-3 px-2">
                        <ul className="flex justify-around text-center">
                            <li>
                                <p className="font-xl font-bold">£205,000</p>
                                <span>Target</span>
                            </li>
                            <li>
                                <p className="font-xl font-bold">£205,000</p>
                                <span>Target</span>
                            </li>
                            <li>
                                <p className="font-xl font-bold">£205,000</p>
                                <span>Target</span>
                            </li>
                        </ul>
                    </div>

                </div>
                <Link to="/project/refurbishment-opportunity">
                    <button className="uppercase text-center w-full py-3 bg-[#ffa500] text-white  font-semibold tracking-widest">Funded</button>
                </Link >

            </div>

        </div>
    )
}
export default ProjectCard;
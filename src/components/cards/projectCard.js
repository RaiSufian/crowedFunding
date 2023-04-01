import { Link } from "react-router-dom";
const ProjectCard = ({ value }) => {
    return (

        <div className="w-full px-2 mt-5">
            <div className="border border-[#ffa500]">
                <img src={value?.project_gallery[0]?.pgal_image} className="h-36 w-full object-cover" />
                <div className="md:h-28 h-36">
                    <h4 className="px-3 pt-3 text-xl font-semibold">{value.proj_name}</h4>
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
                                <p className="font-xl font-bold">£{value.proj_loan}</p>
                                <span>Target</span>
                            </li>
                            <li>
                                <p className="font-xl font-bold">£{value.proj_developer_investment}</p>
                                <span>Pledged</span>
                            </li>
                            <li>
                                <p className="font-xl font-bold">{value.total_investor}</p>
                                <span>Investors</span>
                            </li>
                        </ul>
                    </div>

                </div>
                <Link to={`/project/${value.proj_id}`}>
                    <button className="uppercase text-center w-full py-3 bg-[#ffa500] text-white  font-semibold tracking-widest">Participate Now</button>
                </Link >

            </div>

        </div>
    )
}
export default ProjectCard;
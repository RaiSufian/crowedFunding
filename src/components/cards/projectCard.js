import { Link } from "react-router-dom";
import moment from 'moment';
const ProjectCard = ({ value }) => {
    const startdate = moment(value?.proj_enddate).format('YYYY-MM-DD');
    const currentDate = moment();

    const days = currentDate.diff(startdate, 'days')

    const leftdays = days * -1;

    const intPer = Math.floor(value.total_investment / value.proj_investment * 100);
    console.log("investement percentage", intPer);
    return (

        <div className="w-full px-2 mt-5">
            <div className="border border-[#ffa500]  ">
                <div className="h-48">
                    <img src={value?.proj_logo} className="h-full w-full object-cover" />
                </div>

                <div className="md:h-28 h-36">
                    <h4 className="px-3 pt-3 text-xl font-semibold">{value.proj_name}</h4>
                    <p className="px-3 text-sm textOverflow">{value.pro_short_description} </p>
                </div>
                <div className="px-2">
                    {leftdays > 0 ? <p className="font-bold text-center  m-1 pb-1">{leftdays} days to go - 100.00%</p> : <p className="font-bold text-center  m-1 pb-1">End - 100.00%</p>}

                    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mb-3">
                        <div className={`bg-[#ffa500] h-1.5 rounded-full `} style={{ width: `${intPer}%` }}></div>
                    </div>
                    <div className=" py-3 px-2">
                        <ul className="flex justify-around text-center">
                            <li>
                                <p className="font-xl font-bold">£{value.proj_loan}</p>
                                <span>Target</span>
                            </li>
                            <li>
                                <p className="font-xl font-bold">£{value.total_investment}</p>
                                <span>Loan</span>
                            </li>
                            <li>
                                <p className="font-xl font-bold">{value.total_investor}</p>
                                <span>Investors</span>
                            </li>
                        </ul>
                    </div>

                </div>
                <Link to={`/project/${value.proj_id}`}>
                    <button className="uppercase text-center w-full py-3 bg-[#ffa500] text-white  font-semibold tracking-widest hover:tracking-wider transition-all duration-200">Participate Now</button>
                </Link >

            </div>

        </div>
    )
}
export default ProjectCard;
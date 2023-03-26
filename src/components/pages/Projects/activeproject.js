import { Link } from 'react-router-dom';
import ProjectCard from '../../cards/projectCard';
const ActiveProject = () => {
    return (
        <>
            <div className="contact_bread_crumb lg:py-8 lg:py-6 py-4 bg-gray-100 border-b  border-gray-200 px-2">
                <div className="lg:w-[1260px] max-w-full mx-auto font-mont relative">
                    <h1 className=" lg:text-4xl md:text-2xl text-2xl px-2">Invest In Property
                    </h1>
                    <span className="px-2 mt-3 text-gray-500 text-md">We provide Amazing Services</span>
                    <ul className="absolute top-1/4 right-0 flex gap-2 text-sm text-gray-700">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        /
                        <li>
                            Property
                        </li>
                    </ul>
                </div>
            </div>
            <div className="">

                <div className="lg:w-[1260px] max-w-full mx-auto md:py-10 py-5">
                    <h1 className="lg:text-[40px] md:text-[30px] text-[28px] font-bold lg:py-6 py-3 text-[#151D29FF] text-center">Property Investment Opportunities
                    </h1>
                    <div className="lg:w-[14%] w-[25%] border-t-8 border-[#ffa500] mx-auto"></div>
                    <div className="flex flex-wrap justify-center gap-5 mt-5">
                        <div className="lg:w-[30%] md:w-[60%] w-[90%]">
                            <ProjectCard />
                        </div>
                        <div className="lg:w-[30%] md:w-[60%] w-[90%]">
                            <ProjectCard />
                        </div>
                        <div className="lg:w-[30%] md:w-[60%] w-[90%]">
                            <ProjectCard />
                        </div>
                        <div className="lg:w-[30%] md:w-[60%] w-[90%]">
                            <ProjectCard />
                        </div>
                        <div className="lg:w-[30%] md:w-[60%] w-[90%]">
                            <ProjectCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ActiveProject;
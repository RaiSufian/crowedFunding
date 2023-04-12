import ProjectCard from '../../cards/projectCard';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from "axios";
import { useDispatch } from 'react-redux';
import { endload, startload } from '../../redux/slice/loader';
import { Helmet } from 'react-helmet';
const ActiveProject = () => {
    const dispatch = useDispatch();
    const [project, setProjects] = useState([]);
    const getProjects = async () => {
        try {
            await axios.get("/index.php?action=get_projects&proj_status=1").then((resp) => {
                console.log("get detail project result is", resp.data.data);
                if (resp.status == "200") {
                    setProjects(resp.data.data);
                    dispatch(endload());
                }
            }).error((e) => {
                console.log("get project api error", e)
            })
        }
        catch (error) {
            console.log("get project api error", error);
        }
    }

    useEffect(() => {
         dispatch(startload());
        getProjects();
    }, [])
    return (
        <>
        < Helmet >
        <title>Ative Projects vcrowdfund | The Future of Property Investment</title>
        </Helmet>
            <div className="contact_bread_crumb lg:py-8 lg:py-6 py-4 bg-gray-100 border-b  border-gray-200 px-2">
                <div className="lg:w-[1260px] max-w-full mx-auto font-mont relative">
                    <h1 className=" lg:text-4xl md:text-2xl text-2xl px-2">Projects
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
                    <h1 className="lg:text-[40px] md:text-[30px] text-[28px] font-bold lg:py-6 py-3 text-[#151D29FF] text-center">Projects Investment Opportunities
                    </h1>
                    <div className="lg:w-[14%] w-[25%] border-t-8 border-[#ffa500] mx-auto"></div>
                    <div className="flex flex-wrap justify-center gap-5 mt-5">

                        {project.map((value, index) => {
                            return (
                                <div className="lg:w-[30%] md:w-[60%] w-[90%]" key={index}>
                                    <ProjectCard value={value} />
                                </div>

                            )
                        })}


                    </div>
                </div>
            </div>
        </>
    )
}
export default ActiveProject;
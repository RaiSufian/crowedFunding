
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import ProjectCard from '../../cards/projectCard';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { endload, startload } from '../../redux/slice/loader';

const ProjectSlider = ({ aboutPage }) => {
    const dispatch = useDispatch();
    const [project, setProjects] = useState([]);
    
    const getProjects = async () => {
        try {
            await axios.get("/index.php?action=get_projects&proj_featured=1").then((resp) => {
                console.log("get project list", resp.data.data);
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

 
   
    var settings = {
        loop: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="mx-auto  px-4 py-6 pt-0">
            <h2 className="lg:text-[40px] md:text-[32px] text-[22px] font-bold md:leading-loose py-4 text-[#151D29FF] text-center">{aboutPage}</h2>
            <div className="lg:w-[14%] w-[25%] border-t-8 border-[#ffa500] mx-auto"></div>
            <div className="mx-auto xl:w-[1100px] w-full" >
                <Slider {...settings}>
                    {project.map((items, index) => {
                        return (
                            <div className="mx-auto" key={index}>
                                <ProjectCard value={items} />
                            </div>
                        )
                    })}
                </Slider>
            </div>

        </div >
    )
}
export default ProjectSlider;
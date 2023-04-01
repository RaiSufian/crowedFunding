
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
            await axios.get("/index.php?action=get_projects").then((resp) => {
                console.log("get project list", resp.data.data);
                if (resp.status == "200") {
                    setProjects(resp.data.data);
                    dispatch(endload());
                }
            }).error((e) => {
                console.log("get project list api error", e)
            })
        }
        catch (error) {
            console.log("get project list catch error", error);
        }
    }

    useEffect(() => {
         dispatch(startload());
        getProjects();
    }, [])
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
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
            <h2 className="px-3 md:text-3xl text-2xl md:py-5 py-2 font-bold">{aboutPage}</h2>
            <Slider {...settings}>
                {project.map((items, index) => {
                    return (
                        <div className="mx-auto" key={index}>
                            <ProjectCard value={items} />
                        </div>
                    )
                })}
            </Slider>
        </div >
    )
}
export default ProjectSlider;
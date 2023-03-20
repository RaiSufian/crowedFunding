
import Slider from 'react-slick';
import ProjectCard from '../../cards/projectCard';

const ProjectSlider = ({ aboutPage }) => {
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
                    infinite: true,
                    dots: true
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
    const imgs = [{ url: "hello1" }, { url: "hello2" }, { url: "hello3" }, { url: "hello4" }, { url: "hello5" }]

    return (
        <div className="mx-auto  px-4 py-6 pt-0">
            <h2 className="px-3 md:text-4xl text-2xl md:py-5 py-2 font-bold">{aboutPage}</h2>
            <Slider {...settings}>
                <div className="mx-auto">
                    <ProjectCard />
                </div>
                <div>
                    <ProjectCard />
                </div>
                <div>
                    <ProjectCard />
                </div>
                <div>
                    <ProjectCard />
                </div>
                <div>
                    <ProjectCard />
                </div>
                <div>
                    <ProjectCard />
                </div>
            </Slider>
        </div >
    )
}
export default ProjectSlider;
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import ProjectCard from '../home/projectsSlider';
import { endload, startload } from '../../redux/slice/loader';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../../redux/slice/project';
import moment from 'moment';
import axios from "axios";
import { Helmet } from 'react-helmet';
const ProjectDetails = () => {

    const [details, setDetails] = useState({});
    const [detailImg, setDetailsImg] = useState([]);
    const [able, setable] = useState(true);
    const dispatch = useDispatch();
    const [dateLeft, setdateLeft] = useState("");
    const [intper, serintper] = useState("")
    const { id } = useParams();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const types = [{
        id: 1,
        name: "Residential Plot"
    },
    {
        id: 2,
        name: "Commercial Plot"
    },
    {
        id: 3,
        name: "Industrial Plot"
    },
    ]
    const getProjectDetails = async () => {
        try {
            await axios.get(`/index.php?action=get_projects&proj_id=${id}`).then((resp) => {

                if (resp.status == "200") {
                    // console.log("get project details data is 1", resp.status);
                    setDetails(resp.data.data[0]);
                    dispatch(endload());
                    setDetailsImg(resp.data.data[0].project_gallery);
                    dispatch(addProject(resp.data.data[0]));
                }

            })
        }
        catch (error) {
            console.log("get project data error", error)
        }
    }
    useEffect(() => {
        dispatch(startload());
        getProjectDetails();

    }, [id])
    useEffect(() => {
        // console.log("project status is", details?.proj_status);
        if (details.proj_status == 1) {
            setable(false);
        }
    }, [details]);
    useEffect(() => {
        const startdate = moment(details?.proj_enddate).format('YYYY-MM-DD');
        const currentDate = moment();
        const days = currentDate.diff(startdate, 'days')
        setdateLeft(days * -1);
        const intPer = Math.floor(details.total_investment / details.proj_investment * 100);
        serintper(intPer + "%");
    }, [details]);



    return (
        <>
            < Helmet >
                <title>{details.proj_name}</title>
                <meta name="description" content={details.pro_short_description} />
            </Helmet>
            <div className="contact_bread_crumb py-8 bg-gray-100 border-b  border-gray-200 px-2">
                <div className="lg:w-[1260px] max-w-full mx-auto font-mont relative">
                    <h1 className="lg:text-4xl md:text-2xl text-lg px-2">Project Investment Information
                    </h1>
                    <span className="px-2 mt-3 text-gray-500 text-md">We provide Amazing Services</span>
                    <ul className="absolute md:top-1/4 top-full right-0 flex gap-2 text-sm text-gray-700">
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
            <section className="py-10">
                <div className="lg:w-[1260px] max-w-full mx-auto font-mont px-2">
                    <div className="lg:flex gap-2 relative">
                        <div className="lg:w-[65%] w-full">
                            {detailImg.length == 0 ? <img src={details.proj_logo} alt="primary_img" className="lg:h-96 md:h-60 h-52  w-full object-cover rounded-lg" /> : <div className="">
                                <Slider {...settings}>
                                    {detailImg.map((item, index) => {
                                        return (
                                            <div className="" key={index}>
                                                <img src={item.pgal_image} className="lg:h-96 md:h-60 h-52  w-full object-cover rounded-lg" alt={item.pgal_title} />
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>}

                            <div className="border rounded-sm border-gray-200 p-4 mt-4">
                                <h3 className="text-xl font-semibold uppercase">Your Participation</h3>
                                <ul className="pt-3">
                                    <li className="flex py-2 border-b">
                                        <span className="flex-1 font-semibold">Minimum Investment Loan Amount - </span>
                                        <span className="flex-1">£ {details.proj_min_loan}</span>
                                    </li>
                                    <li className="flex py-2 border-b">
                                        <span className="flex-1 font-semibold">Profits assumed - </span>
                                        <span className="flex-1">{details.proj_profit}</span>
                                    </li>
                                    <li className="flex py-2 border-b">
                                        <span className="flex-1 font-semibold">Term -  </span>
                                        <span className="flex-1">{details.proj_term}</span>
                                    </li>
                                    <li className="flex py-2 border-b">
                                        <span className="flex-1 font-semibold">Returns Promised - </span>
                                        <span className="flex-1">{details.proj_return_promised}</span>
                                    </li>
                                    <li className="flex py-2 border-b">
                                        <span className="flex-1 font-semibold">Payment Return - </span>
                                        <span className="flex-1">{details.proj_payment_return}</span>
                                    </li>
                                    <li className="flex py-2 border-b">
                                        <span className="flex-1 font-semibold">Borrower Type –  </span>
                                        <span className="flex-1">{details.proj_borrower_type}</span>
                                    </li>
                                    <li className="flex py-2 border-b">
                                        <span className="flex-1 font-semibold">Security Available -  </span>
                                        <span className="flex-1">None</span>
                                    </li>
                                    <li className="flex py-2 border-b">
                                        <span className="flex-1 font-semibold">Risk Accessment -  </span>
                                        <span className="flex-1">{details.proj_risk_accessment}&nbsp; &nbsp;<Link to="/risk_statement" className="text-sm">(risk statement)</Link></span>
                                    </li>
                                </ul>
                                <p className="pt-3 font-semibold text-gray-500"><strong className="text-black">Note: </strong>* Your capital is at risk and returns are not guaranteed.  Please read the Investment Memorandum before investing.
                                </p>
                            </div>
                            <div className="border rounded-sm border-gray-200 p-4 mt-4">
                                <h3 className="text-xl font-semibold ">INVESTMENT SUMMARY</h3>
                                <div
                                    dangerouslySetInnerHTML={{ __html: details.proj_investment_summary }}
                                />
                            </div>
                        </div>
                        <div className="lg:w-[35%] w-full lg:h-screen lg:sticky top-8 pt-5 lg:pt-0">
                            <div className="border rounded-sm border-gray-200 p-3 relative">
                                <h1 className="font-semibold text-2xl font-lato pr-3">{details.proj_name}</h1>
                                {types.map((item, index) => {
                                    if (details.proj_type == item.id) {
                                        console.log(details.proj_type, item.id);
                                        return (
                                            <p className="pt-3 flex items-start gap-1" key={index}>
                                                <Icon icon="teenyicons:search-property-outline" className="text-2xl text-gray-500 w-6" /><span className="flex-1">{item.name}</span>
                                            </p>
                                        )
                                    }

                                })}

                                <p className="pt-3 flex items-start gap-1">
                                    <Icon icon="material-symbols:location-on-outline" className="text-2xl text-gray-500 w-6" /><span className="flex-1">{details.proj_location}</span>
                                </p>
                                {/* <div className="absolute top-3 right-3">
                                    <Icon icon="mdi:favorite-border" className="text-4xl text-red-400" />
                                </div> */}

                            </div>
                            <div className="border rounded-sm border-gray-200 p-3 mt-4">
                                <div className="">
                                    <ul className="py-2">
                                        <li className="mt-2 flex gap-2 items-center justify-between">
                                            <h6 className="text-xl text-[#ffa500] font-lato flex items-center gap-1"><Icon icon="mdi:shield-star-outline" />Total Investment -</h6> <span className="text-md text-blck">£ {details.proj_investment}</span>
                                        </li>
                                        <li className="mt-2 flex gap-2 items-center justify-between">
                                            <h6 className="text-xl text-[#ffa500] font-lato flex items-center gap-1"><Icon icon="mdi:shield-star-outline" />Loan Required -</h6> <span className="text-md text-blck">£ {details.proj_loan}</span>
                                        </li>
                                        <li className="mt-2 flex gap-2 items-center justify-between">
                                            <h6 className="text-xl text-[#ffa500] font-lato flex items-center gap-1"><Icon icon="mdi:shield-star-outline" />Developers Investment -</h6> <span className="text-md text-blck">£ {details.proj_developer_investment}</span>
                                        </li>
                                    </ul>
                                </div>
                                <hr className="shadow-lg my-3" />
                                <div className="py-3">
                                    <div className="overInvester flex items-center justify-between text-xl font-semibold font-lato " >
                                        <span>£{details.total_investment}</span>
                                        <span>{details.total_investor}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-[10px] py-2">
                                        <span>of £{details.proj_investment}</span>
                                        <span>Current Investors
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                        <div className={`bg-[#ffa500] h-1.5 rounded-full dark:bg-blue-500 `} style={{ width: `${intper}` }}></div>
                                    </div>
                                    <div className="flex items-center justify-between text-[10px] py-2">
                                        <span><strong>{intper}</strong> Funded</span>
                                        {dateLeft > 0 ? <span><strong>{dateLeft}</strong> days left to fund</span> : <span>Funds End</span>}

                                    </div>
                                    <div className="mt-2">
                                        {able ? <button className="w-full py-3 bg-[#F5F5F5] text-black uppercase font-semibold shadow-md rounded-sm hover:tracking-widest transition-all duration-100" disabled>
                                            Invest End
                                        </button> : <Link to="/StartFunding">
                                            <button className="w-full py-3 bg-[#ffa500] text-white uppercase font-semibold shadow-md rounded-sm hover:tracking-widest transition-all duration-100" >
                                                Invest Now
                                            </button>
                                        </Link>}


                                        <div className="p-1 w-36 h-36 mx-auto rounded-full overflow-hidden mt-5">
                                            <img src="/images/darkLogo.jpg" className="h-full w-full rounded-full  shadow-md " />
                                        </div>
                                        <h2 className="text-center text-xl font-semibold py-2 ">V Crowd Fund</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <ProjectCard aboutPage={"Related Projects"} />
                </div>
            </section>
        </>
    )
}
export default ProjectDetails;
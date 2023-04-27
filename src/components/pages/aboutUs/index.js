import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { endload, startload } from '../../redux/slice/loader';
import { useDispatch } from 'react-redux';
import axios from 'axios';
const AboutUs = () => {
    const dispatch = useDispatch();
    const [data, setdate] = useState({});
    const getAbout = async () => {
        try {
            await axios.get("index.php?action=get_page_content&cnt_id=2").then((resp) => {
                // console.log("get api for about us", resp.data.data[0]);
                setdate(resp.data.data[0]);
                dispatch(endload());
            })
        }
        catch (error) {
            console.log("get api for about us error", error)
        }
    }
    useEffect(() => {
        dispatch(startload());
        getAbout();
    }, []);

    return (
        <>
            < Helmet >
                <title>{data.cnt_title}</title>
                <meta name="description"
                    content={data.cnt_metades} />
                <meta property="og:description"
                    content={data.cnt_metades} />
                <meta name="keywords"
                    content={data.cnt_keywordsf} />
            </Helmet>
            <div className="contact_bread_crumb lg:py-8 lg:py-6 py-4 bg-gray-100 border-b  border-gray-200 px-2">
                <div className="lg:w-[1260px] max-w-full mx-auto font-mont relative main_menu">
                    <h1 className=" lg:text-4xl md:text-2xl text-2xl px-2">About Us</h1>
                    <span className="px-2 mt-3 text-gray-500 text-md">We provide Amazing Services</span>
                    <ul className="absolute top-1/4 right-0 flex gap-2 text-sm text-gray-700 ">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        /
                        <li>
                            About Us
                        </li>
                    </ul>
                </div>
            </div>
            <section className=" py-10">
                <div className="lg:w-[1260px] max-w-full mx-auto px-5 font-mont">
                    <div className=" items-center">
                        <div className="lg:float-right lg:mt-5 mx-auto lg:w-96 md:w-84 w-64 lg:ml-7 relative before:absolute before:w-72 before:z-0 before:h-32 before:content-[''] before:top-10 before:border-8 before:border-b-0 before:left-1/2 before:-translate-x-1/2 before:border-[#ffa500] after:absolute after:h-32 after:w-72 after:content-[''] after:border-[#ffa500] after:border-8 after:left-1/2 after:-translate-x-1/2 after:bottom-10 after:border-t-0 after:z-20">
                            <img src="/images/About-Us.png" className="h-80 mx-auto relative z-10" alt="about_img" />
                        </div>
                        <div className="pt-2">
                            <h1 className="lg:text-[32px] md:text-[28px] text-[20px] font-bold text-[#151D29FF] pb-2 font-lato">{data.cnt_title}</h1>
                            <div dangerouslySetInnerHTML={{ __html: data.cnt_details }}>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutUs;
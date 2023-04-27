import { Link, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { endload, startload } from '../../redux/slice/loader';
import { useDispatch } from 'react-redux';
import axios from 'axios';
const TermsConditions = () => {
    const dispatch = useDispatch();
    const [data, setdate] = useState({});
    const getPrivacy = async () => {
        try {
            await axios.get("index.php?action=get_page_content&cnt_id=5").then((resp) => {
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
        getPrivacy();
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
                    <h1 className="lg:text-4xl md:text-2xl text-2xl px-2">Terms & Conditions</h1>
                    <span className="px-2 mt-3 text-gray-500 text-md">We provide Amazing Services</span>
                    <ul className="absolute top-1/4 right-0 flex gap-2 text-sm text-gray-700">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        /
                        <li>
                            Terms & conditions
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="lg:w-[1240px] max-w-full mx-auto lg:py-10 md:py-8 py-4 px-2">
                    {/* <span className="underline cursor-pointer" onClick={() => navigate(-1)}>Go Back</span> */}
                    <h2 className="md:py-5 py-2 lg:text-[40px] md:text-[30px] text-[28px] font-bold text-center text-[#151D29FF]">
                        Terms & Conditions
                    </h2>
                    <div className="lg:w-[14%] w-[25%] border-t-8 border-[#ffa500] mx-auto mb-10"></div>
                    <div className="xl:px-40 lg:px-10 md:px-3 px-2">
                        <div className="" dangerouslySetInnerHTML={{ __html: data.cnt_details }}></div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default TermsConditions;
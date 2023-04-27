import HeroSection from "./HeroSection";
import Importance from "./improtance";
import Message from "./mainMsg";
import InvestGuide from "./InvestGuide";
import ProjectSlider from "./projectsSlider";
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { endload, startload } from '../../redux/slice/loader';
import { useDispatch } from 'react-redux';
import axios from "axios";
const Home = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});

    const getContent = async () => {
        try {
            await axios.get("index.php?action=get_page_widgets&cnt_id=1").then((resp) => {
                setData(resp.data.data);
                dispatch(endload());
            })
        }
        catch (error) {
            console.log("get home page API error", error);

        }
    }
    useEffect(() => {
        dispatch(startload());
        getContent();
    }, [])
   
    return (
        <>
            < Helmet >
                <title>Crowd Fund House London | Small Investment in London Property Market</title>
                <meta name="description"
                    content="Small amount investment in London Properties and make profits, This is the furture of property investment in London" />
            </Helmet>
            <HeroSection heroText={data[1]} smallScall={data[0]} smalltime={data[2]} profit_timing={data[3]} />
            <Importance heading={data[4]} whyInvest={data[5]} howInvest={data[6]} whatInvest={data[7]} />
            <Message data={data[8]} />
            <InvestGuide data={data[9]} />
            <ProjectSlider aboutPage={"Active Investment Opportunities"} status={1} />
            <ProjectSlider aboutPage={"Past Investment Opportunities"} status={0} />
        </>
    )
}
export default Home;
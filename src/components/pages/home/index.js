import HeroSection from "./HeroSection";
import Importance from "./improtance";
import Message from "./mainMsg";
import InvestGuide from "./InvestGuide";
import ProjectSlider from "./projectsSlider";
import { Helmet } from 'react-helmet';
const Home = () => {
    return (
        <>
            < Helmet >
                <title>V Crowd Fund | The Future of Property Investment</title>
                <meta name="description"
                    content="Discover the future of property investment with London House Exchange, The world’s only regulated stock exchange for individual properties. Property ownership, simplified."/>
            </Helmet>
            <HeroSection />
            <Importance />
            <Message />
            <InvestGuide />
            <ProjectSlider aboutPage={"Active Investment Opportunities"} status={1} />
            <ProjectSlider aboutPage={"Past Investment Opportunities"} status={0} />
        </>
    )
}
export default Home;
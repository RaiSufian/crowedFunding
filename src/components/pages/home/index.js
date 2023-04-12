import HeroSection from "./HeroSection";
import Importance from "./improtance";
import Message from "./mainMsg";
import InvestGuide from "./InvestGuide";
import ProjectSlider from "./projectsSlider";
const Home = () => {
    return (
        <>  <HeroSection />
            <Importance />
            <Message />
            <InvestGuide />
            <ProjectSlider aboutPage={"Active Investment Opportunities"} status={1}/>
            <ProjectSlider aboutPage={"Past Investment Opportunities"} status={0}/>
        </>
    )
}
export default Home;
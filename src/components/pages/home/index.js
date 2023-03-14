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
            <ProjectSlider />
        </>
    )
}
export default Home;
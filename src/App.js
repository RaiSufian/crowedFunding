import Header from "./components/header";
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/home";
import AboutUs from "./components/pages/aboutUs";
import Footer from "./components/footer";
import ContactUs from "./components/pages/contactus";
import NotFound from "./components/pages/error/notFound";
import ProjectDetails from "./components/pages/projectDetails";
import ActiveProject from './components/pages/Projects/activeproject';
import StartFunding from "./components/pages/FundingStart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/StartFunding" element={<StartFunding />} />
        <Route path="/project/:refurbishment-opportunity" element={<ProjectDetails />} />
        <Route path="/active_projects" element={<ActiveProject />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;

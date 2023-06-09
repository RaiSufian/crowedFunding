import Header from "./components/header";
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/home";
import AboutUs from "./components/pages/aboutUs";
import Footer from "./components/footer";
import ContactUs from "./components/pages/contactus";
import NotFound from "./components/pages/error/notFound";
import ProjectDetails from "./components/pages/projectDetails";
import ActiveProject from './components/pages/ativeProjects/activeproject';
import StartFunding from "./components/pages/FundingStart";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import FAQs from "./components/pages/faqs";
import PrivacyPolicy from "./components/pages/privacyPolicy";
import CheckOut from './components/pages/checkout';
import OldProject from "./components/pages/oldProjects";
import TermsConditions from "./components/pages/termsConditions";
import Disclaimer from "./components/pages/disclaimer";
import Loader from "./components/loader";
import ThankYou from "./components/pages/thankYou/thankyou";
import Agreement from "./components/pages/agreement";
import Riskstatement from "./components/pages/riskStatement/riskstatement";

function App() {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Loader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/StartFunding" element={<StartFunding />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/projects/active_items" element={<ActiveProject />} />
        <Route path="/projects/past_items" element={<OldProject />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/terms_&_conditions" element={<TermsConditions />} />
        <Route path="/view_agreement" element={<Agreement />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/risk_statement" element={<Riskstatement />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>


      <Footer />
    </>

  );
}

export default App;

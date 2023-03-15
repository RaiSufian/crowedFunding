import Header from "./components/header";
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/home";
import AboutUs from "./components/pages/aboutUs";
import Footer from "./components/footer";
import ContactUs from "./components/pages/contactus";
import Login from './components/authPages/login';
import NotFound from "./components/pages/error/notFound";
import SignUp from "./components/authPages/sign";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/sign_up" element={<SignUp/>}/>
        <Route path="/user/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;

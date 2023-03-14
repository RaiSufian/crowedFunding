import Header from "./components/header";
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/home";
import AboutUs from "./components/pages/aboutUs";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      {/* <Footer /> */}
    </>

  );
}

export default App;

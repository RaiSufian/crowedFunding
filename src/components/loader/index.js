import Lottie from "lottie-react";
import LoadingAnimation from '../json/loader.json';
import { useSelector } from "react-redux";
const Loader = () => {
    const loader = useSelector((state) => state.Loader.load)
    return (
        <div className={`h-screen fixed top-0 w-screen z-50 bg-white flex items-center justify-center ${loader ? "" : "hidden"}`} >
            <div className="w-20"><Lottie animationData={LoadingAnimation} loop={true} /></div>
        </div>
    )
}
export default Loader;
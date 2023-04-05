import Lottie from "lottie-react";
import thankYou from '../../json/thankyou2.json';
import { Link } from "react-router-dom";
const ThankYou = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <>

            <div className=" flex items-center justify-center overflow-hidden py-20">
                <div className="text-center font-semibold">
                    <div className="w-100 flex justify-center mx-auto"><Lottie animationData={thankYou} options={defaultOptions} loop="false" /></div>
                    <span>Thank you for reaching out!</span>
                    <p>You message just showed up in my inbox.Talk you soom!</p>
                    <div className="text-center py-5">
                        <Link to="/">
                            <button className="py-2 px-4 bg-green-500 text-white rounded-md text-lg font-semibold">Back to Home</button>
                        </Link>

                    </div>
                </div>
            </div>
        </>

    )
}
export default ThankYou;
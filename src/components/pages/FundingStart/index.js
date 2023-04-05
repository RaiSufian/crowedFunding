import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from 'react-redux';
import { addDetails, removeDetails } from '../../redux/slice/userDetails';
const StartFunding = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [Unitoken, getUniToken] = useState();
    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);
    const userDetails = useSelector((state) => state.userDetails.user)

    const initialValues = {
        email: "",
        confirmEmail: "",
        name: "",
        phone: "",
        DOB: "",
        address: "",
        houseNo: "",
        streetNo: "",
        townName: "",
        country: "",
        state: "",
        city: "",
        TerCon: false,
        disc: false,
        agree: false,
        amount: ""
    };
    // ==================================================
    // get Token for country API
    // ==================================================

    const getToken = async () => {
        await axios.get("https://www.universal-tutorial.com/api/getaccesstoken", {
            headers: {
                "Accept": "application/json",
                "api-token": "DuSZ8Q_Y0YdQujx5HzGvbEkEEB62JNX_nRMWL02OGgzOJiNzXuKKfQogB3XPxFlbGOA",
                "user-email": "mashancs571@gmail.com"
            }
        }).then(res => getUniToken(res.data.auth_token))
            .catch(err => console.log("token error", err));
    }
    // ==================================================
    // get city name API
    // ==================================================
    const getCity = async () => {
        await axios.get(`https://www.universal-tutorial.com/api/cities/${formik.values.state}`, {
            headers: {
                "Authorization": `Bearer ${Unitoken}`,
                "Accept": "application/json"
            }
        }).then(res => setCity(res.data))
            .catch(err => console.log(err));
    }
    // ==================================================
    // get state name API
    // ==================================================
    const getState = async () => {
        await axios.get(`https://www.universal-tutorial.com/api/states/${formik.values.country}`, {
            headers: {
                "Authorization": `Bearer ${Unitoken}`,
                "Accept": "application/json"
            }
        }).then(res => setState(res.data))
            .catch(err => console.log(err));
    }
    // ==================================================
    // get country name API
    // ==================================================
    const getCountry = async () => {
        await axios.get("https://www.universal-tutorial.com/api/countries/", {
            headers: {
                "Authorization": `Bearer ${Unitoken}`,
                "Accept": "application/json"
            }
        }).then(res => setCountry(res.data))
            .catch(err => console.log(err));
    }
    // ==================================================
    // On Submit form
    // ==================================================
    const onSubmit = (values) => {
        console.log("my current values is", values);
        dispatch(addDetails(values));
        navigate("/checkout");
    }
    // ==================================================
    // Form Validation
    // ==================================================
    const validationSchema = Yup.object({
        email: Yup.string().required("This field is required")
            .email("Please enter email address"),
        confirmEmail: Yup.string().oneOf([Yup.ref('email'), null], "Does not match with field1!")
            .required('This field is required'),
        name: Yup.string().required("This field is required"),
        phone: Yup.string().required("This field is required"),
        DOB: Yup.string().required("This field is required"),
        address: Yup.string().required("This field is required").max(50, "you can add max 50 letters"),
        houseNo: Yup.string().required("This feild is required"),
        streetNo: Yup.string().required("This feild is required"),
        townName: Yup.string().required("This feild is required"),
        country: Yup.string().required("This feild is required"),
        state: Yup.string().required("This feild is required"),
        city: Yup.string().required("This feild is required"),
        TerCon: Yup.boolean()
            .oneOf([true], "You must accept the terms and conditions"),
        disc: Yup.boolean()
            .oneOf([true], "You must accept Disclaimer"),
        agree: Yup.boolean()
            .oneOf([true], "You must accept agreement")
    });


    // Formik form
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });
    useEffect(() => {
        getToken()
        if (userDetails) {
            formik.values.email = userDetails.email;
            formik.values.confirmEmail = userDetails.confirmEmail;
            formik.values.name = userDetails.name;
            formik.values.phone = userDetails.phone;
            formik.values.DOB = userDetails.DOB;
            formik.values.address = userDetails.address;
            formik.values.houseNo = userDetails.houseNo;
            formik.values.streetNo = userDetails.streetNo;
            formik.values.townName = userDetails.townName;
            formik.values.country = userDetails.country;
            formik.values.state = userDetails.state;
            formik.values.city = userDetails.city;
            formik.values.TerCon = userDetails.TerCon;
            formik.values.disc = userDetails.disc;
            formik.values.agree = userDetails.agree;
        }
    }, [])
    useEffect(() => {
        if (Unitoken) {
            getCountry();
        }

    }, [Unitoken])
    useEffect(() => {
        if (formik.values.country) {
            getState();
        }
    }, [formik.values.country])
    useEffect(() => {
        if (formik.values.state) {
            getCity();
        }
    }, [formik.values.state])

    return (
        <>
            <div className="contact_bread_crumb py-8 bg-gray-100 border-b  border-gray-200 px-2">
                <div className="lg:w-[1260px] max-w-full mx-auto font-mont relative">
                    <h1 className=" lg:text-4xl md:text-2xl text-lg px-2">Start Investing
                    </h1>
                    <span className="px-2 mt-3 text-gray-500 text-md">We provide Amazing Services</span>
                    <ul className="absolute md:top-1/4 top-full right-0 flex gap-2 text-sm text-gray-700">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        /
                        <li>
                            Investment
                        </li>
                    </ul>
                </div>
            </div>
            <div className="">

                <div className="lg:w-[1260px] max-w-full mx-auto font-mont relative py-10">
                    <span className="underline cursor-pointer" onClick={() => navigate(-1)}>Go Back</span>
                    <h2 className="lg:text-[40px] md:text-[30px] text-[28px] font-bold py-6 text-[#151D29FF] text-center pb-5 ">Enter Your Personal Infomation</h2>
                    <div className="lg:w-[14%] w-[25%] border-t-8 border-[#ffa500] mx-auto mb-10"></div>
                    <div className="bg-gray-100 px-5 font-mont">
                        <form className="flex flex-wrap py-8" onSubmit={formik.handleSubmit}>
                            <div className="pt-4 lg:w-1/2 w-full px-2 relative">
                                <label>Email<span className="text-red-500 text-xl">*</span></label>
                                <input type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" className="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter your email' required />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-red-600 absolute top-full text-sm">{formik.errors.email}</div>
                                ) : null}
                            </div>
                            <div className="pt-4 lg:w-1/2 w-full px-2 relative">
                                <label>Confirm Email<span className="text-red-500 text-xl">*</span></label>
                                <input type="email" value={formik.values.confirmEmail} onChange={formik.handleChange} onBlur={formik.handleBlur} name="confirmEmail" className="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='confirm your email' required />
                                {formik.touched.confirmEmail && formik.errors.confirmEmail ? (
                                    <div className="text-red-500 absolute top-full text-sm">{formik.errors.confirmEmail}</div>
                                ) : null}
                            </div>
                            <div className="pt-4 lg:w-1/2 w-full px-2 relative">
                                <label>Name<span className="text-red-500 text-xl">*</span ></label>
                                <input type="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} name="name" className="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter your name' required />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className="text-red-500 absolute top-full text-sm">{formik.errors.name}</div>
                                ) : null}
                            </div>
                            <div className="pt-4 lg:w-1/2 w-full px-2 relative">
                                <label>Phone<span className="text-red-500 text-xl">*</span></label>
                                <input type="number" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} name="phone" className="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter your name' required />
                                {formik.touched.phone && formik.errors.phone ? (
                                    <div className="text-red-500 absolute top-full text-sm">{formik.errors.phone}</div>
                                ) : null}
                            </div>
                            <div className="pt-4 lg:w-1/2 w-full px-2 relative">
                                <label>Day of Birth<span className="text-red-500 text-xl">*</span></label>
                                <input type="date" value={formik.values.DOB} onChange={formik.handleChange} onBlur={formik.handleBlur} name="DOB" className="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='' required />
                                {formik.touched.DOB && formik.errors.DOB ? (
                                    <div className="text-red-500 absolute top-full text-sm">{formik.errors.DOB}</div>
                                ) : null}
                            </div>
                            <div className="pt-4 lg:w-3/4 w-full px-2 relative">
                                <label>Address<span className="text-red-500 text-xl">*</span></label>
                                <input type="text" value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur} name="address" className="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter your address' required />
                                {formik.touched.address && formik.errors.address ? (
                                    <div className="text-red-500 absolute top-full text-sm">{formik.errors.address}</div>
                                ) : null}
                            </div>
                            <div className="pt-4 lg:w-1/3 md:w-1/2 w-full px-2 relative">
                                <label>House no<span className="text-red-500 text-xl">*</span></label>
                                <input type="text" value={formik.values.houseNo} onChange={formik.handleChange} onBlur={formik.handleBlur} name="houseNo" className="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter your house #' required />
                                {formik.touched.houseNo && formik.errors.houseNo ? (
                                    <div className="text-red-500 absolute top-full text-sm">{formik.errors.houseNo}</div>
                                ) : null}
                            </div>
                            <div className="pt-4 lg:w-1/3 md:w-1/2 w-full px-2 relative">
                                <label>Street Name<span className="text-red-500 text-xl">*</span></label>
                                <input type="text" value={formik.values.streetNo} onChange={formik.handleChange} onBlur={formik.handleBlur} name="streetNo" className="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter your street name' required />
                                {formik.touched.streetNo && formik.errors.streetNo ? (
                                    <div className="text-red-500 absolute top-full text-sm">{formik.errors.streetNo}</div>
                                ) : null}
                            </div>
                            <div className="pt-4 lg:w-1/3 md:w-1/2 w-full px-2 relative">
                                <label>Town<span className="text-red-500 text-xl">*</span></label>
                                <input type="text" value={formik.values.townName} onChange={formik.handleChange} onBlur={formik.handleBlur} name="townName" className="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter your town name' required />
                                {formik.touched.townName && formik.errors.townName ? (
                                    <div className="text-red-500 absolute top-full text-sm">{formik.errors.townName}</div>
                                ) : null}
                            </div>

                            <div className="pt-4 lg:w-1/3 md:w-1/2 w-full px-2 relative">
                                <label>Country<span className="text-red-500 text-xl">*</span></label>
                                <select id="countries" value={formik.values.country} onChange={formik.handleChange} onBlur={formik.handleBlur} name="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="" selected>Choose a country</option>
                                    {country.map((value, index) => {
                                        return (
                                            <>
                                                <option value={value.country_name} key={value.country_short_name}>{value.country_name}</option>
                                            </>
                                        )
                                    })}
                                </select>
                                {formik.touched.country && formik.errors.country ? (
                                    <div className="text-red-500 absolute top-full text-sm">{formik.errors.country}</div>
                                ) : null}
                            </div>
                            <div className="pt-4 lg:w-1/3 md:w-1/2 w-full px-2 relative">
                                <label>State<span className="text-red-500 text-xl">*</span></label>
                                <select id="countries" value={formik.values.state} onChange={formik.handleChange} onBlur={formik.handleBlur} name="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="" selected>Choose a state</option>
                                    {state.map((value, index) => {
                                        return (
                                            <>
                                                <option value={value.state_name} key={value.state_name}>{value.state_name}</option>
                                            </>
                                        )
                                    })}
                                </select>
                                {formik.touched.state && formik.errors.state ? (
                                    <div className="text-red-500 absolute top-full text-sm">{formik.errors.state}</div>
                                ) : null}                            </div>
                            <div className="pt-4 lg:w-1/3 md:w-1/2 w-full px-2 relative">
                                <label>City<span className="text-red-500 text-xl">*</span></label>
                                <select id="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} name="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="" selected>Choose a city</option>
                                    {city.map((value, index) => {
                                        return (
                                            <>
                                                <option value={value.city_name} key={value.city_name}>{value.city_name}</option>
                                            </>
                                        )
                                    })}
                                </select>
                                {formik.touched.city && formik.errors.city ? (
                                    <div className="text-red-500 absolute top-full text-sm">{formik.errors.city}</div>
                                ) : null}
                            </div>
                            <div className="pt-4 w-full px-2 flex items-center gap-4 ">
                                <input type="checkbox" value={formik.values.TerCon} onChange={formik.handleChange} onBlur={formik.handleBlur} name="TerCon" checked={formik.values.TerCon ? "true" : ""} /> <Link to="/terms_&_conditions"><span className="text-sm">Terms & Conditions</span></Link>
                                {formik.touched.TerCon && formik.errors.TerCon ? (
                                    <span className="text-red-500  text-sm">{formik.errors.TerCon}</span>
                                ) : null}
                            </div>
                            <div className="pt-4 w-full px-2 flex items-center gap-2">
                                <input type="checkbox" value={formik.values.disc} onChange={formik.handleChange} onBlur={formik.handleBlur} name="disc" checked={formik.values.disc ? "true" : ""} /> You need to check <Link className="text-sm" to="/disclaimer" >Disclaimer</Link>
                                {formik.touched.disc && formik.errors.disc ? (
                                    <span className="text-red-500  text-sm">{formik.errors.disc}</span>
                                ) : null}
                            </div>
                            <div className="pt-4 w-full px-2 flex items-center gap-2">
                                <input type="checkbox" value={formik.values.agree} onChange={formik.handleChange} onBlur={formik.handleBlur} name="agree" checked={formik.values.agree ? "true" : ""} /> Check  <Link className="text-sm " to="/view_agreement" >agreement </Link>
                                {formik.touched.agree && formik.errors.agree ? (
                                    <span className="text-red-500  text-sm">{formik.errors.agree}</span>
                                ) : null}
                            </div>
                            <div className="pt-8 w-full px-2 ">
                                <button type="submit" className="min-w-1/4 bg-blue-500 text-white py-3 md:px-8 px-4 text-xl hover:bg-[#ffa500] rounded">Proceed to Payment Page </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StartFunding;
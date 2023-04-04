import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const CheckOut = () => {

    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order
            .create({
                purchase_units: [
                    {
                        description: "property investment with vcrowdfund",
                        amount: {
                            currency_code: "GBP",
                            value: formik.values.investprice,
                        },
                    },
                ],
                // not needed if a shipping address is actually needed
                application_context: {
                    shipping_preference: "NO_SHIPPING",
                },
            })
            .then((orderID) => {
                setOrderID(orderID);
                console.log("order id after complete paypal", orderID);
                return orderID;
            });
    };
    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
            console.log("complete order object", details);
            console.log("payment down is", payer);

        });
    };
    //capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
    };

    const initialValues = {
        investprice: 0,
        paymethod: "",
        payID: "",

    }
    const validationSchema = Yup.object({
        investprice: Yup.number().required("Please add investment amount here").min(500, "you can min £5,000 ").max(50000, "you can add max £5,00,000"),
        paymethod: Yup.string().required("Please select paymethod method"),
        payID: Yup.string().required("Please add paymethod first")
    })
    const onSubmit = () => {
        alert("submit done")
    }
    const project = useSelector((state) => state.activeproject.project);
    const userDetails = useSelector((state) => state.userDetails.user);
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });


    return (
        <>
            <div className="contact_bread_crumb py-8 bg-gray-100 border-b  border-gray-200 px-2">
                <div className="lg:w-[1260px] max-w-full mx-auto font-mont relative">
                    <h1 className=" text-4xl px-2">Check Out
                    </h1>
                    <span className="px-2 mt-3 text-gray-500 text-md">We provide Amazing Services</span>
                    <ul className="absolute top-1/4 right-0 flex gap-2 text-sm text-gray-700">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        /
                        <li>
                            check out
                        </li>
                    </ul>
                </div>
            </div>
            <div className="lg:w-[1260px] max-w-full mx-auto">
                <div className="flex pt-5">
                    <button className="py-2 px-4 rounded flex ga-3 justify-center items-center text-xl font-semibold bg-gray-200 text-black" onClick={() => navigate(-1)}>
                        <Icon icon="material-symbols:arrow-back-ios-new-rounded" className="text-2xl" /> <span className="pr-2">Back</span>
                    </button>
                </div>
                <div className="lg:flex gap-3 py-5 px-2">
                    <div className="flex-1 bg-gray-100 p-3">
                        <div className="">
                            <div className="">
                                <h3 className="text-gray-700 text-2xl py-3 font-semibold ">Project Info</h3>
                                <div className="md:flex p-5 bg-gray-100 gap-3 rounded">
                                    <div className="flex-1">
                                        <img src={project.project_gallery[0].pgal_image} alt={project.project_gallery[0].pgal_title} className="w-full rounded" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-2xl font-semibold">{project.proj_name}</h4>
                                        <p className="pt-3 flex items-center gap-1">
                                            <Icon icon="teenyicons:search-property-outline" className="text-2xl text-gray-500" />{project.proj_status == 1 ? "Residential Plot" : "Commercial "}
                                        </p>
                                        <p className="pt-3 flex items-start gap-1">
                                            <Icon icon="material-symbols:location-on-outline" className="text-2xl text-gray-500" />{project.proj_location}
                                        </p>
                                        <ul className="py-2">
                                            <li className="mt-2 flex gap-2 items-center justify-between">
                                                <h6 className="text-xl text-[#ffa500] font-lato flex items-center gap-1"><Icon icon="mdi:shield-star-outline" />Total Investment -</h6> <span className="text-md text-blck">£ {project.proj_loan}</span>
                                            </li>
                                            <li className="mt-2 flex gap-2 items-center justify-between">
                                                <h6 className="text-xl text-[#ffa500] font-lato flex items-center gap-1"><Icon icon="mdi:shield-star-outline" />Loan Required -</h6> <span className="text-md text-blck">£ {project.proj_investment}</span>
                                            </li>
                                            <li className="mt-2 flex gap-2 items-center justify-between">
                                                <h6 className="text-xl text-[#ffa500] font-lato flex items-center gap-1"><Icon icon="mdi:shield-star-outline" />Developers Investment -</h6> <span className="text-md text-blck">£ {project.proj_developer_investment}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <h3 className="text-gray-700 text-2xl py-3 font-semibold ">Prosonal Info</h3>
                                <div className="md:p-5 p-1 bg-gray-100 gap-3 rounded">
                                    <ul className="md:flex flex-wrap font-mont">
                                        <li className="flex items-start pt-2 md:w-1/2">
                                            <span className="md:text-lg text-md font-semibold flex-1">Name:</span>
                                            <span className="flex-1 md:text-md text-sm">{userDetails.name}</span>
                                        </li>
                                        <li className="flex items-start pt-2 md:w-1/2">
                                            <span className="md:text-lg text-md font-semibold flex-1">Email:</span>
                                            <span className="flex-1 md:text-md text-sm">{userDetails.email}</span>
                                        </li>
                                        <li className="flex items-start pt-2 md:w-1/2">
                                            <span className="md:text-lg text-md font-semibold flex-1">Phone:</span>
                                            <span className="flex-1 md:text-md text-sm">{userDetails.phone}</span>
                                        </li>
                                        <li className="flex items-start pt-2 md:w-1/2">
                                            <span className="md:text-lg text-md font-semibold flex-1">DOB:</span>
                                            <span className="flex-1 md:text-md text-sm">{userDetails.DOB}</span>
                                        </li>

                                        <li className="flex items-start pt-2 w-full">
                                            <span className="md:text-lg text-md font-semibold flex-1">Address:</span>
                                            <span className=" w-3/4">{userDetails.address}</span>
                                        </li>
                                        <li className="flex items-start pt-2 md:w-1/2">
                                            <span className="md:text-lg text-md font-semibold flex-1">House no:</span>
                                            <span className="flex-1 md:text-md text-sm">{userDetails.houseNo}</span>
                                        </li>
                                        <li className="flex items-start pt-2 md:w-1/2">
                                            <span className="md:text-lg text-md font-semibold flex-1">Street Name:</span>
                                            <span className="flex-1 md:text-md text-sm"> {userDetails.streetNo}</span>
                                        </li>
                                        <li className="flex items-start pt-2 md:w-1/2">
                                            <span className="md:text-lg text-md font-semibold flex-1">Country:</span>
                                            <span className="flex-1 md:text-md text-sm"> {userDetails.country}</span>
                                        </li>
                                        <li className="flex items-start pt-2 md:w-1/2">
                                            <span className="md:text-lg text-md font-semibold flex-1">State:</span>
                                            <span className="flex-1 md:text-md text-sm">{userDetails.state}</span>
                                        </li>
                                        <li className="flex items-start pt-2 md:w-1/2">
                                            <span className="md:text-lg text-md font-semibold flex-1">City:</span>
                                            <span className="flex-1 md:text-md text-sm">{userDetails.city}</span>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 ld:pt-0 pt-5">
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <h3 className="text-gray-700 text-2xl pb-3 font-semibold ">Add Amount</h3>
                                <div className="p-2 border rounded ">
                                    <p>Investment amount</p>
                                    <div>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3 bg-gray-600  rounded-md rounded-r-none">
                                                <span className="text-gray-500 sm:text-sm text-white">£</span>
                                            </div>

                                            <input value={formik.values.investprice} onChange={formik.handleChange} onBlur={formik.handleBlur} name="investprice" type="text" id="price" className=" h-11 block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-gray-600 sm:text-sm sm:leading-6" placeholder="0.00" />
                                            {formik.touched.investprice && formik.errors.investprice ? (
                                                <div className="text-red-600 absolute top-full text-sm">{formik.errors.investprice}</div>
                                            ) : null}
                                        </div>
                                        <p className="mt-5 text-sm"><b>Note: </b>You can add min £500 and max £50000 for investment</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-gray-700 text-2xl py-5 font-semibold ">Add Payment</h3>
                                <div className="p-2 border rounded ">
                                    <div className="flex gap-3 items-center py-2">
                                        <input value="paypal" onChange={formik.handleChange} onBlur={formik.handleBlur} type="radio" name="paymethod" /><span className="text-xl font-semibold">Pay Pal</span>
                                    </div>
                                    {formik.values.paymethod == "paypal" ?
                                        <>
                                            <PayPalScriptProvider options={{
                                                "client-id": "ARStuUYQbcASxDxdDou3gF_x8UqRIBpdL6zPikbnWxPPI68pQSaXoLkIK0hKOXSN4gHU8HdSH7OuAg6x",
                                                "currency": "GBP"
                                            }}>
                                                <PayPalButtons createOrder={createOrder}
                                                    onApprove={onApprove} />
                                            </PayPalScriptProvider>
                                        </> : ""}

                                    <hr />
                                    <div className="flex gap-3 items-center py-2">
                                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="radio" value="payowner" name="paymethod" /><span className="text-xl font-semibold">Payowner</span>
                                    </div>
                                    {formik.values.paymethod == "payowner" ? <>
                                        <button className="my-2 py-3 border rounded-md w-full flex justify-center bg-[#F2F2F2]">
                                            <img src="/images/payoneer.png" className="w-[100px]" />
                                        </button>
                                    </> : ""}
                                    {formik.touched.paymethod && formik.errors.paymethod ? (
                                        <div className="text-red-600 top-full text-sm">{formik.errors.paymethod}</div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="mt-8">
                                {formik.touched.payID && formik.errors.payID ? (
                                    <div className="text-red-600 top-full text-sm">{formik.errors.payID}</div>
                                ) : null}
                                <button className="py-2 text-center w-full bg-[#ffa500] text-white font-semibold shadow-md rounded-sm" type="submit">INVEST</button>
                            </div>
                        </form>


                    </div>
                </div>

            </div>
        </>
    )
}
export default CheckOut;
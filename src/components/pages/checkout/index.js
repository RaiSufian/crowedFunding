import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
const CheckOut = () => {

    const userDetails = useSelector((state) => state.userDetails.user);
    const navigate = useNavigate()
    const [payMethod, setPayMethod] = useState(null);
    console.log("paymethod is", payMethod)
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
                <div className="flex gap-3">
                    <div className="flex-1">
                        <div className="pt-3 pb-8">
                            <div className="">
                                <h3 className="text-gray-700 text-2xl py-3 font-semibold ">Project Info</h3>
                                <div className="flex p-5 bg-gray-100 gap-3 rounded">
                                    <div className="flex-1">
                                        <img src="/images/property1.jpg" alt="pro_img" className="w-full rounded" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-2xl font-semibold">Abu Samra Al Aamriya Riyadah</h4>
                                        <p className="pt-3 flex items-center gap-1">
                                            <Icon icon="teenyicons:search-property-outline" className="text-2xl text-gray-500" />Residential Plot
                                        </p>
                                        <p className="pt-3 flex items-center gap-1">
                                            <Icon icon="material-symbols:location-on-outline" className="text-2xl text-gray-500" />1A Frognal, Hampstead, London, NW3 6AL
                                        </p>
                                        <ul className="py-2">
                                            <li className="mt-2 flex gap-2 items-center justify-between">
                                                <h6 className="text-xl text-[#ffa500] font-lato flex items-center gap-1"><Icon icon="mdi:shield-star-outline" />Total Investment -</h6> <span className="text-md text-blck">£ 5,00,000</span>
                                            </li>
                                            <li className="mt-2 flex gap-2 items-center justify-between">
                                                <h6 className="text-xl text-[#ffa500] font-lato flex items-center gap-1"><Icon icon="mdi:shield-star-outline" />Loan Required -</h6> <span className="text-md text-blck">£ 3,50,000</span>
                                            </li>
                                            <li className="mt-2 flex gap-2 items-center justify-between">
                                                <h6 className="text-xl text-[#ffa500] font-lato flex items-center gap-1"><Icon icon="mdi:shield-star-outline" />Developers Investment -</h6> <span className="text-md text-blck">£ 1,50,000</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <h3 className="text-gray-700 text-2xl py-3 font-semibold ">Prosonal Info</h3>
                                <div className="p-5 bg-gray-100 gap-3 rounded">
                                    <ul className="flex flex-wrap font-mont">
                                        <li className="flex items-end pt-2 w-1/2">
                                            <span className="text-lg font-semibold flex-1">Name:</span>
                                            <span className="flex-1">{userDetails.name}</span>
                                        </li>
                                        <li className="flex items-end pt-2 w-1/2">
                                            <span className="text-lg font-semibold flex-1">Email:</span>
                                            <span className="flex-1">{userDetails.email}</span>
                                        </li>
                                        <li className="flex items-end pt-2 w-1/2">
                                            <span className="text-lg font-semibold flex-1">Phone:</span>
                                            <span className="flex-1">{userDetails.phone}</span>
                                        </li>
                                        <li className="flex items-end pt-2 w-1/2">
                                            <span className="text-lg font-semibold flex-1">DOB:</span>
                                            <span className="flex-1">{userDetails.DOB}</span>
                                        </li>

                                        <li className="flex items-end pt-2 w-full">
                                            <span className="text-lg font-semibold flex-1">Address:</span>
                                            <span className=" w-3/4">{userDetails.address}</span>
                                        </li>
                                        <li className="flex items-end pt-2 w-1/2">
                                            <span className="text-lg font-semibold flex-1">House no:</span>
                                            <span className="flex-1">{userDetails.houseNo}</span>
                                        </li>
                                        <li className="flex items-end pt-2 w-1/2">
                                            <span className="text-lg font-semibold flex-1">Street Name:</span>
                                            <span className="flex-1"> {userDetails.streetNo}</span>
                                        </li>
                                        <li className="flex items-end pt-2 w-1/2">
                                            <span className="text-lg font-semibold flex-1">Country:</span>
                                            <span className="flex-1"> {userDetails.country}</span>
                                        </li>
                                        <li className="flex items-end pt-2 w-1/2">
                                            <span className="text-lg font-semibold flex-1">State:</span>
                                            <span className="flex-1">{userDetails.state}</span>
                                        </li>
                                        <li className="flex items-end pt-2 w-1/2">
                                            <span className="text-lg font-semibold flex-1">City:</span>
                                            <span className="flex-1">{userDetails.city}</span>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-1/3 pt-3">
                        <h3 className="text-gray-700 text-2xl py-3 font-semibold ">Add Payment</h3>
                        <div className="p-2 border rounded ">
                            <div className="flex gap-3 items-center py-2">
                                <input type="radio" value="paypal" name="pay" onChange={(e) => setPayMethod(e.target.value)} /><span className="text-xl font-semibold">Pay Pal</span>
                            </div>
                            {payMethod == "paypal" ?
                                <>
                                    <button className="my-2 py-3 border rounded-md w-full flex justify-center bg-[#F7C039]">
                                        <img src="/images/payoal.png" className="w-[100px]" />
                                    </button>
                                </> : ""}

                            <hr />
                            <div className="flex gap-3 items-center py-2">
                                <input type="radio" value="payowner" name="pay" onChange={(e) => setPayMethod(e.target.value)} /><span className="text-xl font-semibold">Payowner</span>
                            </div>
                            {payMethod == "payowner" ? <>
                                <button className="my-2 py-3 border rounded-md w-full flex justify-center bg-[#F2F2F2]">
                                    <img src="/images/payoneer.png" className="w-[100px]" />
                                </button>
                            </> : ""}

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default CheckOut;
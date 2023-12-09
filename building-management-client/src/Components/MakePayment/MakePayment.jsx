import React from 'react';
import useAuth from '../../Hooks/useAuth'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

const MakePayment = () => {

    const { user } = useAuth()
    const [agreements, setAgreements] = useState([])
    const [month, setMonth] = useState('');

    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };

    useEffect(() => {
        axios.get(`  https://b8a12-server-side-istiak-ahmed2902.vercel.app/getProfileData/${user.email}`)
            .then(response => {
                setAgreements(response.data)
            })
            .catch(error => {
                console.error('Error sending data:', error);
            });
    }, [user.email])

    return (
        <div className='w-full'>
            <div className="flex flex-col mx-auto max-w-4xl p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <form action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm">Email</label>
                            <input type="text" name="email" value={agreements[0]?.email} className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" readOnly />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Floor</label>
                            <input type="text" name="floorNo"
                                value={agreements[0]?.floorNo}
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Block Name</label>
                            <input type="text" name="blockName"
                                value={agreements[0]?.blockName}
                                placeholder="Coupon Description" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Apartment No</label>
                            <input type="text" name="apartmentNo"
                                value={agreements[0]?.apartmentNo}
                                placeholder="Status" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Rent</label>
                            <input type="text" name="rent"
                                value={agreements[0]?.rent}
                                placeholder="Month" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        {/* New field for applying coupon */}
                        <div>
                            <label className="block mb-2 text-sm">Month</label>
                            <input
                                type="text"
                                name="month"
                                placeholder="MM"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                value={month}
                                onChange={handleMonthChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <Link
                                to={{
                                    pathname: '/dashboard/Payment',
                                    state: { month: month }, // Pass the month value as state
                                }}
                            >
                                <button type="submit" className="btn btn-info w-full">Proceed to Payment</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );

};

export default MakePayment;
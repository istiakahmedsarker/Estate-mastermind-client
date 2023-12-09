import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const ManageCoupons = () => {
    const [coupons, setCoupons] = useState([])

    useEffect(() => {
        fetch("  https://b8a12-server-side-istiak-ahmed2902.vercel.app/getCoupons")
            .then((res) => res.json())
            .then((data) => setCoupons(data));
    }, []);
    console.log(coupons)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Coupon Code</th>
                            <th>Discount Percentage</th>
                            <th>Coupon Description</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            coupons.map((coupon, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{coupon.couponCode}</td>
                                    <td>{coupon.discountPercentage}</td>
                                    <td>{coupon.couponDescription}</td>
                                    <td>{coupon.status}</td>
                                    <td><button
                                        // onClick={() => handleAdd()} 
                                        className="btn btn-error">Delete Coupon</button></td> {/* Add appropriate action here */}
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

            <div className="flex justify-center my-4">
                <NavLink to='/dashboard/addCoupon'>
                    <button className="btn btn-info text-center mx-auto">
                        Add Coupon
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default ManageCoupons;
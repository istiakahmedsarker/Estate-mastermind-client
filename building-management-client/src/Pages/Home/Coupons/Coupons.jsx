import React, { useEffect, useState } from 'react';
import CouponCard from '../CouponCard/CouponCard';

const Coupons = () => {
    const [coupons,setCoupons] = useState([])

    useEffect(() => {
        fetch("https://b8a12-server-side-istiak-ahmed2902.vercel.app/getCoupons")
            .then((res) => res.json())
            .then((data) => setCoupons(data));
    }, []);
    console.log(coupons)
    return (
        <div className='my-8 mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {coupons.map(coupon => (
                <div key={coupon._id} className="coupon-card-wrapper">
                    <CouponCard coupon={coupon}></CouponCard>
                </div>
            ))}
        </div>
    );
};

export default Coupons;
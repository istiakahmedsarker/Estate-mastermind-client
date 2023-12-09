import axios from 'axios';
import React from 'react';

const AddCoupon = () => {
    const onSubmit = async (event) => {
        event.preventDefault()
        const couponCode = event.target.couponCode.value;
        const discountPercentage = event.target.discountPercentage.value;
        const couponDescription = event.target.couponDescription.value;
        const status = event.target.status.value;

        const couponData = {
            couponCode,
            discountPercentage,
            couponDescription,
            status
        };

        axios.post('  https://b8a12-server-side-istiak-ahmed2902.vercel.app/addCoupon', couponData)
            .then(response => {
                console.log('Announcement sent successfully!', response.data);
                event.target.reset();
            })
            .catch(error => {
                console.error('Error sending announcement:', error);
            });

    }

    return (
        <div>
            <div className="flex flex-col mx-auto max-w-2xl p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <form onSubmit={onSubmit} action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm">Coupon code</label>
                            <input type="text" name="couponCode" placeholder="Coupon code" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Discount Percentage</label>
                            <input type="text" name="discountPercentage" placeholder="Discount Percentage" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Coupon Description</label>
                            <input type="text" name="couponDescription" placeholder="Coupon Description" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Status</label>
                            <input type="text" name="status" placeholder="Status" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="btn btn-info w-full">Add Coupon</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

};


export default AddCoupon;
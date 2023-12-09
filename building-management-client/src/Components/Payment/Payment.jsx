import { loadStripe } from '@stripe/stripe-js';

import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm.jsx'

const stripePromise = loadStripe('pk_test_51KC1ZmI7BqVrKYKIYVF80Hb1NqhbX5uoyqEbLmhhxbzv5S9WRiamVvZ61ghItGwvACUo62jtyjlccMbvZZ5G8mUY00vahoFHuJ');

const Payment = () => {
    return (
        <div>
            <div className="">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
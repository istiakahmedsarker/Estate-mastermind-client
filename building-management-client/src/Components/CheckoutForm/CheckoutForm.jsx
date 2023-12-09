import { useEffect, useState } from 'react';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useRent from '../../Hooks/useRent';
import axios from 'axios';

import { Toaster,toast } from 'react-hot-toast';


const CheckoutForm = () => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const navigate = useNavigate()
    const { user } = useAuth()
    const rent = useRent()

    const date = new Date(); // You can use any valid Date object

    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);

    console.log(formattedDate)
    useEffect(() => {
        if (rent > 0) {
            axios.post(' https://b8a12-server-side-istiak-ahmed2902.vercel.app/create-payment-intent', { price: rent })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [rent])

    const handleSubmit = async (event) => {
        event.preventDefault(); // Ensure event is prevented

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (!card) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.error('Payment error', error);
            setError(error.message);
            return;
        }

        console.log('Payment method', paymentMethod);
        setError('');

        if (!clientSecret) {
            console.error('Client secret not available');
            setError('Client secret not available');
            return;
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous',
                },
            },
        });

        if (confirmError) {
            setError(confirmError.message);
            console.error(confirmError);
        } else {
            console.log('Payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);
                const payment = {
                    email: user?.email,
                    transactionId: paymentIntent.id,
                    price: paymentIntent.amount / 100,
                    date: formattedDate,
                    status: 'Successful',
                };
                
                toast.success('Rent payed successfully')
                axios.post(' https://b8a12-server-side-istiak-ahmed2902.vercel.app/payments', payment)
                    .then(response => {
                        console.log('Data sent successfully!', response.data);
                    })
                    .catch(error => {
                        console.error('Error sending data:', error);
                    });

                navigate('/dashboard/paymentHistory');
            }
        }
    };

    return (
        <div className="w-full mx-auto">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <form className='w-[500px] mx-auto' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-primary my-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className='text-red-600'>{error}</p>
                {
                    transactionId && <p className='text-green-600'>Transaction complete with transactionId: {transactionId}</p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import axios from 'axios';

const PaymentHistory = () => {
    const { user } = useAuth();
    const [payments, setPayments] = useState([]);
    const [overduePayments, setOverduePayments] = useState(0); // Use state for overdue payments count

    useEffect(() => {
        fetch(`https://b8a12-server-side-istiak-ahmed2902.vercel.app/paymentHistory/${user.email}`)
            .then((res) => res.json())
            .then((data) => setPayments(data));
    }, [user.email]); // Include user.email in the dependency array

    // const mockPayments = [
    //     { _id: 1, price: 100, transactionId: 'ABC123', date: '15/10/2023', status: 'Pending' },
    //     { _id: 2, price: 150, transactionId: 'DEF456', date: '18/10/2023', status: 'Pending' },
    //     { _id: 3, price: 200, transactionId: 'GHI789', date: '20/10/2023', status: 'Pending' },
    //     { _id: 4, price: 250, transactionId: 'JKL012', date: '22/10/2023', status: 'Pending' },
    // ];
    
    // useEffect(() => {
    //     setPayments(mockPayments);
    // }, []);

    if (overduePayments >= 3) {
        axios.put(`https://b8a12-server-side-istiak-ahmed2902.vercel.app/rejectUserEmail/${user?.email}`)
            .then(response => {
                console.log('Data sent successfully!', response.data);

            })
            .catch(error => {
                console.error('Error sending data:', error);
            });
    }

    console.log(overduePayments)

    // Check for overdue payments
    useEffect(() => {
        if (payments.length > 0) {
            const currentDate = new Date(); // Get current date
            const reminderThreshold = 10; // Threshold for sending a reminder (in days)
            let overdueCount = 0; // Initialize overdue count
    
            payments.forEach(payment => {
                const [day, month, year] = payment.date.split('/'); // Assuming 'date' is in '30/11/2023' format
    
                // Create a JavaScript Date object from the payment date
                const paymentDate = new Date(`${year}-${month}-${day}`);
    
                // Calculate the difference in days between payment date and current date
                const differenceInTime = currentDate.getTime() - paymentDate.getTime();
                const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    
                // Check if the payment is overdue by more than the reminder threshold
                if (differenceInDays > reminderThreshold) {
                    const daysOverdue = differenceInDays - reminderThreshold;
                    console.log(`Payment ID ${payment._id} is overdue by ${daysOverdue} days.`);
                    
                    // Here you can add code to send a reminder after 10 days of the due date
                    // For example:
                    if (daysOverdue === 10) {
                        // Code to send a reminder to the user for the overdue payment
                        console.log(`Send reminder for payment ID ${payment._id}`);
                    }
    
                    overdueCount++; // Increment overdue count
                }
            });
    
            setOverduePayments(overdueCount); // Update the state with the overdue count
        }
    }, [payments]);

    return (
        <div>
                    <div className="">
                        <h1 className={`text-center text-3xl ${overduePayments > 0 ? 'text-red-500' : ''}`}>
                            {overduePayments > 0 ? `Warning: ${overduePayments} overdue payments!` : ''}
                        </h1>
                    </div>
            <h2 className="text-3xl">Payment History:{payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {payments.map((payment, index) => {
                            return (
                                <tr key={payment._id}>
                                    <th>{index + 1}</th>
                                    <td>${payment.price}</td>
                                    <td>{payment.transactionId}</td>
                                    <td>{payment.date}</td>
                                    <td>{payment.status}</td>
                                </tr>
                            )
                        }
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
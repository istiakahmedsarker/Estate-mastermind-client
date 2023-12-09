import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'

const AgreementRequests = () => {
    const [agreements, setAgreements] = useState([])

    useEffect(() => {
        fetch("  https://b8a12-server-side-istiak-ahmed2902.vercel.app/getAgreements")
            .then((res) => res.json())
            .then((data) => setAgreements(data));
    }, []);

    console.log(agreements)
    const handleDelete = (id,email) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, reject it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // update the status to checked
                console.log(email)
                axios.put(`  https://b8a12-server-side-istiak-ahmed2902.vercel.app/rejectUser/${id}`)
                    .then(response => {
                        console.log('Data sent successfully!', response.data);
                        // set user role to user
                        axios.put(`  https://b8a12-server-side-istiak-ahmed2902.vercel.app/rejectUserEmail/${email}`)
                            .then(response => {
                                console.log('Data sent successfully!', response.data);

                            })
                            .catch(error => {
                                console.error('Error sending data:', error);
                            });
                    })
                    .catch(error => {
                        console.error('Error sending data:', error);
                    });
                Swal.fire({
                    title: "Rejected!",
                    text: "Your file has been Rejected.",
                    icon: "success"
                });
            }
        });
    }

    const handleAccept = (id, email) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, accept it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // update the status
                axios.put(`  https://b8a12-server-side-istiak-ahmed2902.vercel.app/acceptUser/${id}`)
                    .then(response => {
                        console.log('Data sent successfully!', response.data);
                        // update the user role
                        axios.put(`  https://b8a12-server-side-istiak-ahmed2902.vercel.app/acceptUserEmail/${email}`)
                            .then(response => {
                                console.log('Data sent successfully!', response.data);

                            })
                            .catch(error => {
                                console.error('Error sending data:', error);
                            });
                    })
                    .catch(error => {
                        console.error('Error sending data:', error);
                    });
                Swal.fire({
                    title: "Accepted!",
                    text: "Your file has been accepted.",
                    icon: "success"
                });
            }
        });
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Floor no</th>
                            <th>Block name</th>
                            <th>Room no</th>
                            <th>Rent</th>
                            <th>Agreement request date</th>
                            <th>Accept/Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            agreements.map((user, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.floorNo}</td>
                                    <td>{user.blockName}</td>
                                    <td>{user.room}</td>
                                    <td>${user.rent}</td>
                                    <td>{user.agreementDate}</td>
                                    <td>
                                        <button onClick={() => handleAccept(user._id,user.email)} className="btn btn-info">Accept</button>
                                        <button onClick={() => handleDelete(user._id,user.email)} className="btn btn-error ml-2">Reject</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AgreementRequests;
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'


const ManageMembers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("  https://b8a12-server-side-istiak-ahmed2902.vercel.app/getUsers")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`  https://b8a12-server-side-istiak-ahmed2902.vercel.app/deleteUser/${id}`)
                    .then(response => {
                        console.log('Data sent successfully!', response.data);
                    })
                    .catch(error => {
                        console.error('Error sending data:', error);
                    });
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
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
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{user.displayName}</td>
                                    <td>{user.email}</td>
                                    <td><button onClick={() => handleDelete(user._id)} className="btn btn-error">Delete</button></td> {/* Add appropriate action here */}
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMembers;
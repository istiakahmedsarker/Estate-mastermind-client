import React, { useEffect, useState } from 'react';
import useMember from '../../Hooks/useMember.jsx'
import useAuth from '../../Hooks/useAuth.jsx';
import axios from 'axios';

const MyProfile = () => {

    const { user } = useAuth();
    const [profileData, setProfileData] = useState([]);
    const isMember = useMember();
    const email = user?.email;

    useEffect(() => {
        axios.get(`  https://b8a12-server-side-istiak-ahmed2902.vercel.app/getProfileData/${email}`)
            .then(response => {
                console.log('Data retrieved successfully!', response.data);
                setProfileData(response.data); // Update the state with the retrieved data
            })
            .catch(error => {
                console.error('Error retrieving data:', error);
            });
    }, [email]);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Agreement Date</th>
                            <th>Floor No</th>
                            <th>Block No</th>
                            <th>Rent</th>
                        </tr>
                    </thead>
                    {
                        isMember ?
                            <tbody>
                                {
                                    profileData?.map((user, index) => (
                                        <tr key={index}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.agreementDate}</td>
                                            <td>{user.floorNo}</td>
                                            <td>{user.blockName}</td>
                                            <td>{user.rent}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                            :
                            <tbody>
                                <tr >
                                    <th>1</th>
                                    <td>{user?.displayName}</td>
                                    <td>{user?.email}</td>
                                    <td>None</td>
                                    <td>None</td>
                                    <td>None</td>
                                    <td>None</td>
                                </tr>
                            </tbody>
                    }
                </table>
            </div>
        </div>
    );
};

export default MyProfile;
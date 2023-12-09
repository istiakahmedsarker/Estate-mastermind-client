import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { HiSpeakerphone } from "react-icons/hi";

const Announcements = () => {
    const [announcements, setAnnouncements] = useState([])
    useEffect(() => {
        axios.get(`  https://b8a12-server-side-istiak-ahmed2902.vercel.app/announcements`)
            .then(response => {
                console.log('Data retrieved successfully!', response.data);
                setAnnouncements(response.data); // Update the state with the retrieved data
            })
            .catch(error => {
                console.error('Error retrieving data:', error);
            });
    }, []);
    console.log(announcements)
    return (
        <div className="">
            {
                announcements.map(announcement => (
                    <div key={announcement._id} className="bg-white border rounded-lg overflow-hidden shadow-lg flex justify-center mx-auto w-[40%]">
                        <div className="p-4">
                            <HiSpeakerphone className="text-3xl" />
                        </div>
                        <div className="p-8 flex-1">
                            <h3 className="text-lg font-semibold mb-2">{announcement.title}</h3>
                            <p className="text-gray-600">{announcement.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Announcements;
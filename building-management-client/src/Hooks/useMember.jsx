// useAdmin.js
import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useMember = () => {
    const [isMember, setMember] = useState(true); // Initialize isAdmin to false initially
    const { user } = useAuth();
    const email = user?.email;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`  https://b8a12-server-side-istiak-ahmed2902.vercel.app/checkAdmin/${email}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.length > 0 && data[0]?.role === 'member') {
                        setMember(true);
                    } else {
                        setMember(false);
                    }
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching admin data:', error);
            }
        };

        if (email) {
            fetchData();
        }
    }, [email]);

    return isMember;
};

export default useMember;

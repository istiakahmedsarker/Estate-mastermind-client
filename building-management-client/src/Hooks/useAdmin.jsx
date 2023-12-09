import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useAdmin = () => {
    const [isAdmin, setAdmin] = useState(true);
    const { user } = useAuth();
    const email = user?.email;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(` https://b8a12-server-side-istiak-ahmed2902.vercel.app/checkAdmin/${email}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.length > 0 && data[0]?.role === 'admin') {
                        setAdmin(true);
                    } else {
                        setAdmin(false);
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

    return isAdmin;
};

export default useAdmin;

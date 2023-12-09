import useAuth from './useAuth'
import { useState, useEffect } from "react";
import axios from "axios";

const useRent = () => {
    const { user } = useAuth()
    const [rent,setRent] = useState(0)

    useEffect(() => {
        axios.get(` https://b8a12-server-side-istiak-ahmed2902.vercel.app/getProfileData/${user.email}`)
            .then(response => {
                setRent(response.data[0].rent);
            })
            .catch(error => {
                console.error('Error sending data:', error);
            });
    }, [user.email])

    return rent
};

export default useRent;
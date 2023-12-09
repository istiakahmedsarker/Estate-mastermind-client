
import { useState } from 'react';
import { useEffect } from 'react'
import ApartmentCard from '../ApartmentCard/ApartmentCard';
import { Pagination } from '@mui/material';
import { motion, useMotionValue, useTransform } from 'framer-motion';

// ... (other imports and code)

const ApartmentCards = () => {
    const [apartments, setApartments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [apartmentsPerPage] = useState(6);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating loading time with setTimeout
        const timeout = setTimeout(() => {
            setIsLoading(false); // Set loading to false after timeout
        }, 3000); // Adjust the timeout duration as needed

        return () => clearTimeout(timeout); // Cleanup on unmount
    }, []);

    const count = useMotionValue(0);

    useEffect(() => {
        fetch(`  https://b8a12-server-side-istiak-ahmed2902.vercel.app/apartments`)
            .then((res) => res.json())
            .then((data) => setApartments(data));
    }, [currentPage, apartmentsPerPage]);

    const paginate = (event, pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderApartments = () => {

        const indexOfLastApartment = currentPage * apartmentsPerPage;
        const indexOfFirstApartment = indexOfLastApartment - apartmentsPerPage;
        const currentApartments = apartments.slice(indexOfFirstApartment, indexOfLastApartment);

        return currentApartments.map(apartment => (
            <ApartmentCard key={apartment._id} apartment={apartment}></ApartmentCard>
        ));
    };

    const totalPages = Math.ceil(apartments.length / apartmentsPerPage);

    return (
        <>
            {isLoading ? (
                <motion.div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        overflowY: 'hidden'
                    }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                >
                    Loading...
                </motion.div>
            ) : (
                <div className='flex flex-col justify-center mx-20'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {renderApartments()}
                    </div>
                    <div className="flex justify-center mt-4">
                        <Pagination count={totalPages} page={currentPage} onChange={paginate} />
                    </div>
                </div>
            )
            }
        </>

    );
};

export default ApartmentCards;

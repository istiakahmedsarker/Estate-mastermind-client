import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Banner = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating loading time with setTimeout
        const timeout = setTimeout(() => {
            setIsLoading(false); // Set loading to false after timeout
        }, 3000); // Adjust the timeout duration as needed

        return () => clearTimeout(timeout);
    }, []);

    const count = useMotionValue(0);

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
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className="pink-slide">
                    <div className="relative w-full h-[850px] bg-[url('https://i.ibb.co/Mc0vHNx/photo-1515263487990-61b07816b324-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg')] bg-cover bg-black grid md:grid-cols-2 justify-center">
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        <div className="hidden md:block"></div>
                        <div className="flex h-full w-full items-center text-white relative z-10">
                            <div>
                                <h2 className="text-3xl md:text-[40px] font-bold font-mono">Transforming Spaces, Empowering Lives:</h2>
                                <h1 className="text-5xl md:text-6xl font-bold">Your Building, Your Legacy</h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="pink-slide">
                <div className="relative w-full h-[850px] bg-[url('https://i.ibb.co/9rJV6LV/pexels-photo-323705.jpg')] bg-cover bg-black grid md:grid-cols-2 justify-center">
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        <div className="hidden md:block"></div>
                        <div className="flex h-full w-full items-center text-white relative z-10">
                            <div>
                                <h2 className="text-3xl md:text-[40px] font-bold font-mono">Transforming Spaces, Empowering Lives:</h2>
                                <h1 className="text-5xl md:text-6xl font-bold">Your Building, Your Legacy</h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="pink-slide">
                <div className="relative w-full h-[850px] bg-[url('https://i.ibb.co/jTbbJLp/pexels-photo-1643384.jpg')] bg-cover bg-black grid md:grid-cols-2 justify-center">
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        <div className="hidden md:block"></div>
                        <div className="flex h-full w-full items-center text-white relative z-10">
                            <div>
                                <h2 className="text-3xl md:text-[40px] font-bold font-mono">Transforming Spaces, Empowering Lives:</h2>
                                <h1 className="text-5xl md:text-6xl font-bold">Your Building, Your Legacy</h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            )}
        </>
    );
};

export default Banner;


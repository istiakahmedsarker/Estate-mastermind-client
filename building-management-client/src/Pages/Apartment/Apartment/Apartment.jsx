
import Banner from '../../Home/Banner/Banner';
import ApartmentCards from '../ApartmentCards/ApartmentCards';

const Apartment = () => {
    return (
        <div>
            <div className="relative w-full h-[850px] bg-[url('https://i.ibb.co/c6WS2jc/pexels-photo-6283961.jpg')] bg-cover bg-black justify-center">
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        <div className="hidden md:block"></div>
                        <div className="flex justify-center h-full w-full items-center text-white relative z-10">
                            <div>
                                <h1 className="text-5xl md:text-6xl uppercase font-bold">Get your dream apartment now!</h1>
                            </div>
                        </div>
                    </div>
            <ApartmentCards></ApartmentCards>
        </div>
    );
};

export default Apartment;
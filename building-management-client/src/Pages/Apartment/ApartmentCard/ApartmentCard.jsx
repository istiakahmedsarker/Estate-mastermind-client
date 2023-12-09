
import useAuth from '../../../Hooks/useAuth';
import { Toaster, toast } from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const ApartmentCard = ({ apartment }) => {
    const { user } = useAuth()
    const userEmail = user?.email
    const userName = user?.displayName
    const navigate = useNavigate()

    const { apartment_image, floor_number, block_name, apartment_number, rent,room } = apartment

    const date = new Date(); // You can use any valid Date object

    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);


    const handleAgreement = (floorNo, blockName, apartmentNo,room, rent) => {
        // const date = new Date()
        if (user) {
            const dataToSend = {
                email: userEmail,
                name: userName,
                floorNo: floorNo,
                blockName: blockName,
                apartmentNo: apartmentNo,
                rent: rent,
                room:room,
                agreementDate: formattedDate,
                status: 'pending'
            };
            axios.post('  https://b8a12-server-side-istiak-ahmed2902.vercel.app/agreement', dataToSend)
                .then(response => {
                    toast.success('Agreement request send successfully !')
                    console.log('Data sent successfully!', response.data);
                })
                .catch(error => {
                    console.error('Error sending data:', error);
                });
        } else {
            toast.error('Login to request for agreement')
            navigate('/login')
        }
    }
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="relative flex w-full max-w-[26rem] my-8 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                    <img
                        width={'384px'}
                        height={'262px'}
                        src={apartment_image}
                        alt="ui/ux review check"
                    />
                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                </div>
                <div className="p-6">
                    <p className="block font-sans text-base antialiased leading-relaxed text-gray-700">
                        Floor Number: {floor_number} <br />
                        Block Name: {block_name} <br />
                        Apartment Number:{apartment_number} <br />
                        Room Number:{room} <br />
                        Rent: ${rent}
                    </p>
                </div>
                <div className="p-6 pt-3">
                    <button onClick={() => handleAgreement(floor_number, block_name, apartment_number,room, rent)}
                        className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Agreement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;
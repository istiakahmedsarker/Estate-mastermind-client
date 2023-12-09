import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Apartment from "../Pages/Apartment/Apartment/Apartment";
import DashboardMain from "../Layout/DashboardMain";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AdminRoute from './AdminRoute'
import AdminProfile from "../Pages/Dashboard/AdminComponents/AdminProfile/AdminProfile";
import ManageMembers from "../Pages/Dashboard/AdminComponents/ManageMembers/ManageMembers";
import MakeAnnouncement from "../Pages/Dashboard/AdminComponents/MakeAnnouncement/MakeAnnouncement";
import AgreementRequests from "../Pages/Dashboard/AdminComponents/AgreementRequests/AgreementRequests";
import ManageCoupons from "../Pages/Dashboard/AdminComponents/ManageCoupons/ManageCoupons";
import PrivateRoute from './PrivateRoute'
import MemberRoute from './MemberRoute'
import AddCoupon from '../Pages/Dashboard/AdminComponents/AddCoupon/AddCoupon';
import MyProfile from "../Components/MyProfile/MyProfile";
import Announcements from '../Components/Announcements/Announcements'
import MakePayment from "../Components/MakePayment/MakePayment";
import PaymentHistory from '../Pages/Dashboard/MemberComponents/PaymentHistory/PaymentHistory';
import Payment from '../Components/Payment/Payment';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Home',
                element: <Home></Home>
            },
            {
                path: '/Apartment',
                element: <Apartment></Apartment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardMain></DashboardMain>
        </PrivateRoute>
        ,
        children: [
            {
                path: 'myProfile',
                element: <PrivateRoute><MyProfile /></PrivateRoute>,
            },
            {
                path: 'announcements',
                element: <PrivateRoute><Announcements /></PrivateRoute>,
            },


            // member routes
            {
                path: 'myProfile',
                element: <MemberRoute><MyProfile /></MemberRoute>,
            },
            {
                path: 'makePayment',
                element: <MemberRoute><MakePayment /></MemberRoute>,
            },
            {
                path: 'Payment',
                element: <MemberRoute><Payment /></MemberRoute>,
            },
            {
                path: 'paymentHistory',
                element: <MemberRoute><PaymentHistory /></MemberRoute>,
            },
            {
                path: 'announcements',
                element: <MemberRoute><Announcements /></MemberRoute>,
            },


            // Admin routes
            {
                path: 'adminProfile',
                element: <AdminRoute><AdminProfile /></AdminRoute>,
            },
            {
                path: 'manageMembers',
                element: <AdminRoute><ManageMembers /></AdminRoute>,
            },
            {
                path: 'makeAnnouncement',
                element: <AdminRoute><MakeAnnouncement /></AdminRoute>,
            },
            {
                path: 'agreementRequests',
                element: <AdminRoute><AgreementRequests /></AdminRoute>,
            },
            {
                path: 'manageCoupons',
                element: <AdminRoute><ManageCoupons /></AdminRoute>,
            },
            {
                path: 'addCoupon',
                element: <AdminRoute><AddCoupon /></AdminRoute>,
            },
        ]

    }
]);

export default router
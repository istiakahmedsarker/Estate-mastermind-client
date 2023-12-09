
import { FaHome, FaMoneyBillWave, FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoNewspaperSharp } from "react-icons/io5";
import { HiSpeakerphone } from "react-icons/hi";
import { RiCoupon3Fill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import useAdmin from '../../Hooks/useAdmin'
import useMember from '../../Hooks/useMember';

const Dashboard = () => {
    const isAdmin = useAdmin()
    const isMember = useMember()
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen ">
                <ul className="menu p-4">

                    {/* admin section */}
                    {
                        isAdmin && !isMember && <>
                            <li>
                                <NavLink to="/dashboard/adminProfile">
                                    <FaHome></FaHome>
                                    Admin Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageMembers">
                                    <FaUsers></FaUsers>
                                    Manage Members</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/makeAnnouncement">
                                    <HiSpeakerphone></HiSpeakerphone>
                                    Make Announcement</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/agreementRequests">
                                    <IoNewspaperSharp ></IoNewspaperSharp>
                                    Agreement Requests</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageCoupons">
                                    <RiCoupon3Fill></RiCoupon3Fill>
                                    Manage Coupons</NavLink>
                            </li>
                        </>
                    }
                    {/* member section */}

                    {
                        isMember && !isAdmin && <>
                            <li>
                                <NavLink to="/dashboard/myProfile">
                                    <CgProfile></CgProfile>
                                    My Profile </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/makePayment">
                                    <FaMoneyBillWave  ></FaMoneyBillWave>
                                    Make Payment</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/paymentHistory">
                                    <RiMoneyDollarCircleFill  ></RiMoneyDollarCircleFill>
                                    Payment History</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/announcements">
                                    <HiSpeakerphone ></HiSpeakerphone>
                                    Announcements</NavLink>
                            </li>
                        </>
                    }

                    {/* user section */}
                    {
                        !isAdmin && !isMember && <>
                            <li>
                                <NavLink to="/dashboard/myProfile">
                                    <CgProfile></CgProfile>
                                    My Profile </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/announcements">
                                    <HiSpeakerphone ></HiSpeakerphone>
                                    Announcements</NavLink>
                            </li>
                        </>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
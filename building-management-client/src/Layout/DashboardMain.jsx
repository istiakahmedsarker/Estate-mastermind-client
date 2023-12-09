import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import Dashboard from "../Pages/Dashboard/Dashboard";

const DashboardMain = () => {
    return (
        <div>
            <NavBar />
            <div className="flex">
                <div className="w-64 min-h-screen">
                    <Dashboard />
                </div>
            <Outlet></Outlet>

            </div>
            <Footer />
        </div>
    );
};

export default DashboardMain;
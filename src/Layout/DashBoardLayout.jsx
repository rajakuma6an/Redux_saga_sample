import { Outlet } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar'


const DashBoardLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default DashBoardLayout;

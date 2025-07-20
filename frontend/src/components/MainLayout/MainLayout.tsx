import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="bg-[#F3F2F7] flex">
      <Sidebar />
      <div className="w-[82%] relative left-[18%]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

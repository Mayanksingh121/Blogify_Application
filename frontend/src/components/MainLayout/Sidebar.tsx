import { GoHome } from "react-icons/go";
import { FaBookOpenReader } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentActiveComponent = (path: string) => {
    return location.pathname === path ? "bg-[#d9f3ea] text-[#00b074]" : "";
  };

  const handleSignout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="bg-[#FFFFFF] px-5 py-6 w-[18%] shadow-sm min-h-screen fixed">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-3xl">Blogify</h1>
        <p className="text-xs text-[#919294] font-semibold">
          Write you own blogs
        </p>
      </div>
      <div className="my-6 flex flex-col gap-1">
        <div
          onClick={() => navigate("")}
          className={`flex gap-4 items-center ${currentActiveComponent(
            "/auth"
          )}  p-3 rounded-lg cursor-pointer`}
        >
          <GoHome />
          <p className="font-semibold text-xs">Dashboard</p>
        </div>
        <div
          onClick={() => navigate("write-blog")}
          className={`flex gap-4 items-center ${currentActiveComponent(
            "/auth/write-blog"
          )}  p-3 rounded-lg cursor-pointer`}
        >
          <TfiWrite />
          <p className="font-semibold text-xs">Create a blog</p>
        </div>
        <div
          onClick={() => navigate("read")}
          className={`flex gap-4 items-center ${currentActiveComponent(
            "/auth/read"
          )}  p-3 rounded-lg cursor-pointer`}
        >
          <FaBookOpenReader />
          <p className="font-semibold text-xs">Read</p>
        </div>
        <div
          onClick={handleSignout}
          className="flex gap-4 items-center p-3 rouned-lg cursor-pointer"
        >
          <MdOutlineLogout />
          <p className="font-semibold text-xs">Sing out</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

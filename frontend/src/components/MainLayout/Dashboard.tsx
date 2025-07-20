import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import LineChartComponent from "./LineChartComponent";
import useGetUserBlogs from "../../utils/hooks/useGetUserBlogs";
import RenderUserBlogs from "./RenderUserBlogs";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import BarChartComponent from "./BarChartComponent";

const Dashboard = () => {
  const [noOfViews, setNoOfViews] = useState(0);
  const { userBlogs } = useGetUserBlogs();

  useEffect(() => {
    setNoOfViews(() => {
      return userBlogs.reduce((acc, curr) => {
        return acc + curr.views;
      }, 0);
    });
  }, [userBlogs]);

  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center p-4">
        <div>
          <h1 className="text-[#0a376e] text-2xl font-bold font-roboto">
            Dashboard
          </h1>
          <p className="text-sm">Hi mayank, welcome back</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <span className="text-lg border p-1">
              <CiSearch />
            </span>
            <input
              type="text"
              className="font-roboto focus:outline-none border border-s-0 rounded-e-full py-1 px-3 text-xs"
              placeholder="Search your blog"
            />
          </div>
          <div className="text-2xl cursor-pointer">
            <IoIosNotificationsOutline />
          </div>
        </div>
      </div>
      <div className="my-5 flex flex-col gap-5 px-4">
        <div className="flex gap-10">
          <div className="bg-white shadow-md rounded-lg px-5 py-2">
            <p className="font-bold font-poppins text-2xl text-center">
              <CountUp start={0} end={noOfViews} duration={2} />
            </p>
            <p className="text-xs font-semibold text-gray-500 font-roboto">
              Total views
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg px-5 py-2">
            <p className="font-bold font-poppins text-2xl text-center">
              <CountUp start={0} end={2000000} duration={2.75} />
            </p>
            <p className="text-xs font-semibold text-gray-500 font-roboto">
              Total Likes
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg">
          <div className="flex justify-end px-5 py-4">
            <select className="font-roboto border-[0.5px] border-black  py-1 px-3">
              <option>Football</option>
            </select>
          </div>
          <div className="flex p-4">
            <LineChartComponent />
            <BarChartComponent />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 py-4 bg-white px-4 ">
        <h3 className="font-roboto font-bold text-2xl">Your Blogs</h3>
        <div className="flex flex-col gap-6">
          {userBlogs.length > 0
            ? userBlogs.map((item) => {
                return <RenderUserBlogs key={item._id} blog={item} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

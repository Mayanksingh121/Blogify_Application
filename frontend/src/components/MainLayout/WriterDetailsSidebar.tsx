import { useEffect } from "react";
import PROFILE from "/profile.jpg";

const WriterDetailsSidebar = ({ blogDetails }: any) => {
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3000");

    socket.onopen = () => {
      console.log("WebSocket connection successful");
    };
  });

  return (
    <div className="fixed w-full h-screen flex flex-col px-2 py-5 bg-white border">
      <div className="font-roboto px-3 font-bold text-3xl">Author</div>
      <div className="flex gap-2  items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={PROFILE} alt="profile" />
        </div>
        <div className="font-poppins font-semibold">
          {blogDetails.firstName} {blogDetails.lastName}
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default WriterDetailsSidebar;

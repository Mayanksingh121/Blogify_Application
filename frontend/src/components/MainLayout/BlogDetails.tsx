import {  useParams } from "react-router-dom";
import useGetBlog from "../../utils/hooks/useGetBlog";
import WriterDetailsSidebar from "./WriterDetailsSidebar";
import { BASE_URL } from "../../utils/constants";

const BlogDetails = () => {
  const { blogID } = useParams();
  const { blogDetails, setBlogDetails } = useGetBlog(blogID);

  const handleClick = async () => {
    const response = await fetch(`${BASE_URL}/blog/like`, {
      method: "POST",
      headers: {  
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userID: "66b9f75aee07bb113c128be1",
        blogID: "66bb96b11b9f85e877271000",
      }),
    });

    if (response.ok) {
      console.log("Hi");
    }
  };
  //write logic here later for shimmer;
  if (!blogDetails) {
    return null;
  }

  return (
    <div className="flex justify-between w-full">
      <div className="w-[18%] relative  ">
        <WriterDetailsSidebar blogDetails={blogDetails.blog} />
      </div>
      <div className="relative w-[62%] bg-[#f3f2f7] py-5 px-10">
        <div className="flex flex-col w-full gap-6">
          <h2 className="font-bold font-roboto text-3xl">
            {blogDetails.blog.title}
          </h2>

          <div className="w-[44rem] rounded-lg overflow-hidden">
            <img
              className="w-full h-full"
              src={blogDetails.blog.public_url}
              alt="blogPhoto"
            />
          </div>

          <div className="text-lg font-poppins mt-10">
            {blogDetails.blog.content}
          </div>
        </div>
      </div>
      <div className="relative w-[20%]">
        <button onClick={handleClick}>like it </button>
        <div>no of likes: {blogDetails.blog.likes.length}</div>
      </div>
    </div>
  );
};

export default BlogDetails;

import useGetAllBlogs from "../../utils/hooks/useGetAllBlogs";
import BlogCard from "./BlogCard";
import Shimmer from "./Shimmer";

const ReadBlog = () => {
  const { allBlogs } = useGetAllBlogs();
  
  return (
    <div className="min-h-screen p-4">
      <div className="flex justify-between items-center">
        <input
          className="font-roboto w-[75%] focus:outline-none border px-2 py-1 text-sm rounded-md border-gray-300"
          placeholder="Search for the blog or writer"
          type="text"
        />
      </div>
      <div className="p-10">
        {allBlogs.length > 0 ? (
          <div className="flex gap-7 flex-wrap">
            {allBlogs.map((blog) => {
              return <BlogCard blog={blog} key={blog.public_url} />;
            })}
          </div>
        ) : (
          <div className="flex gap-6 flex-wrap">
            {Array.from({ length: 10 }, (_, index) => index).map((index) => {
              return <Shimmer key={index} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadBlog;

import { Link } from "react-router-dom";
import PROFILE from "/profile.jpg";

interface BlogData {
  firstName: string;
  lastName: string;
  title: string;
  domain: string;
  public_url: string;
  content: string;
  blogID: string;
}

interface BlogCardProps {
  blog: BlogData;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link to={`/auth/reading/${blog.blogID}`}>
      <div className="w-72 rounded-t-lg border shadow-md bg-white cursor-pointer">
        <div className="w-full h-44 object-contain relative rounded-t-lg overflow-hidden">
          <img
            className="w-full h-full"
            src={blog.public_url}
            alt="blogPhoto"
          />
        </div>
        <div className="relative p-2 flex flex-col gap-4 h-36">
          <div className="">
            <h2 className="font-poppins text-start font-bold">{blog.title}</h2>
          </div>
          <div className="flex justify-between items-center mt-auto">
            <div className="flex w-full gap-2 items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={PROFILE} alt="profile" />
              </div>
              <div className="flex flex-col">
                <p className="text-xs font-bold font-poppins">Author</p>
                <p className="text-sm -mt-1 font-roboto">
                  {blog.firstName} {blog.lastName}
                </p>
              </div>
            </div>
            <div>
              {blog.domain.toLowerCase() !== "others" && (
                <div className="bg-[#fee5de] py-1 px-2 rounded-sm font-roboto text-red-500 ">
                  {blog.domain}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

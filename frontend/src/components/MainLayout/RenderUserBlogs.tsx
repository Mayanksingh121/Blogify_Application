import { UserBlogs } from "../../utils";

const RenderUserBlogs = ({ blog }: { blog: UserBlogs }) => {
  return (
    <div className="flex items-center border-b pb-4">
      <div className="flex items-center gap-4">
        <img
          className="w-16 border border-red-500 h-16 rounded-full"
          src={blog.public_url}
        />
        <div>
          <h2 className="font-semibold font-roboto">{blog.title}</h2>
          {blog.domain.toLowerCase() !== "others" && (
            <div>
              <p className="bg-[#fee5de] text-red-500 border px-3 font-semibold py-1 rounded-lg w-fit">
                {blog.domain}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RenderUserBlogs;

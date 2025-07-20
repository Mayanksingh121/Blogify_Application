import { useState } from "react";
import { uploadBlog } from "../../api/uploadingData";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import TextEditor from "./TextEditor";

interface BlogData {
  title: string;
  targetArea: string;
  file: File | null;
  blogContent: string;
}

const WriteBlog = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState<BlogData>({
    title: "",
    targetArea: "others",
    file: null,
    blogContent: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      toast
        .promise(uploadBlog(blogData), {
          loading: "Uploading",
          success: <b>Your blog has been uploaded</b>,
          error: <b>Can't upload blog</b>,
        })
        .then(() => {
          setBlogData({
            title: "",
            targetArea: "",
            file: null,
            blogContent: "",
          });
          console.log("uploaded");
        })
        .catch((e) => {
          if (
            e.response?.message === "can't decode token" ||
            e.response?.message === "not a valid user"
          ) {
            navigate("/");
          } else {
            toast.error("Can't upload at the moment");
          }
        });
    } catch (e) {
      toast.error("Error while uploading, try again later");
    }
  };
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | string
  ) => {
    if (typeof e === "string") {
      console.log(e);
      setBlogData((prevValue) => ({
        ...prevValue,
        ["blogContent"]: e,
      }));
    } else {
      const { name } = e.target;
      setBlogData((prevValue) => ({
        ...prevValue,
        [name]: e.target.value,
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (e.target.files) {
        const file = e.target.files[0];
        setBlogData((prevValue) => ({
          ...prevValue,
          file: file,
        }));
      }
    }
  };

  return (
    <div className="h-full p-4">
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex">
            <div>
              <label className="font-poppins" htmlFor="title">
                Title
              </label>
              <input
                value={blogData.title}
                name="title"
                onChange={handleChange}
                placeholder="Enter title"
                className=" py-1  px-2 text-sm font-poppins focus:outline-none border"
                id="title"
                type="text"
              />
            </div>
            <div>
              <select
                value={blogData.targetArea}
                name="targetArea"
                onChange={handleChange}
                className="focus:outline-none border"
                required
              >
                <option value="others">Others</option>
                <option value="Technology">Technology</option>
                <option value="Science">Science</option>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
                <option value="Finance">Finance</option>
                <option value="Sport">Sport</option>
                <option value="culture">Culture</option>
                <option value="History">History</option>
                <option value="Environment">Environment</option>
              </select>
            </div>
            <div>
              <label className="font-poppins" htmlFor="image">
                Upload image
              </label>
              <input
                name="file"
                id="image"
                onChange={handleFileChange}
                type="file"
              />
            </div>
          </div>
          <TextEditor changeFunction={handleChange} />
          <button
            type="submit"
            className="py-1 px-2 bg-blue-400 text-white rounded-md my-10"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default WriteBlog;

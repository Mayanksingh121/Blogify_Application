import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import toast from "react-hot-toast";

interface Blog {
  firstName: string;
  lastName: string;
  title: string;
  domain: string;
  content: string;
  public_url: string;
  blogID: string;
}

const useGetAllBlogs = () => {
  const [allBlogs, setAllBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blog/get-all-blogs`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.ok) {
          const json = await response.json();
          setAllBlogs(json);
        } else {
          toast.error("Can't get blogs at the moment");
        }
      } catch (e) {
        toast.error("An error occurred while fetching blogs.");
        console.error(e);
      }
    };
    getAllBlogs();

    return () => {
      setAllBlogs([]);
    };
  }, []);

  return { allBlogs };
};

export default useGetAllBlogs;

import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";

const useGetBlog = (blogID: any) => {
  const [blogDetails, setBlogDetails] = useState<any>();

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blog/read/${blogID}`, {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        if (response.ok) {
          const json = await response.json();
          setBlogDetails(json);
        }
      } catch (e) {
        throw e;
      }
    };
    getBlogData();
  }, []);

  return { blogDetails, setBlogDetails };
};

export default useGetBlog;

import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import { UserBlogs } from "../";

const useGetUserBlogs = () => {
  const [userBlogs, setUserBlogs] = useState<UserBlogs[]>([]);
  useEffect(() => {
    getUserBlogs();
  }, []);

  const getUserBlogs = async (): Promise<void> => {
    const response = await fetch(`${BASE_URL}/blog/userBlogs`, {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      setUserBlogs(jsonResponse.message);
    }
  };

  return { userBlogs };
};

export default useGetUserBlogs;

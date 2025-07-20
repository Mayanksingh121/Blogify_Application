import { BASE_URL } from "../utils/constants";

interface BlogData {
  title: string;
  targetArea: string;
  file: File | null;
  blogContent: string;
}
export const uploadBlog = async (blogData: BlogData): Promise<Response> => {
  try {
    const formData = new FormData();
    if (blogData.file) formData.append("file", blogData.file);
    formData.append("title", blogData.title);
    formData.append("targetArea", blogData.targetArea);
    formData.append("blogContent", blogData.blogContent);

    const response = await fetch(`${BASE_URL}/blog/upload`, {
      method: "POST",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: formData,
    });
    return response;
  } catch (e) {
    throw e;
  }
};

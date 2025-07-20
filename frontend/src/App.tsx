import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/MainLayout/Dashboard";
import WriteBlog from "./components/MainLayout/WriteBlog";
import ReadBlog from "./components/MainLayout/ReadBlog";
import Layout from "./components/Layout";
import BlogDetails from "./components/MainLayout/BlogDetails";
import WebSocketContextProvider from "./context/WebSocketContext";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Layout />,
  },
  {
    path: "/auth",
    element: <PrivateRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "",
            index: true,
            element: <Dashboard />,
          },
          {
            path: "write-blog",
            element: <WriteBlog />,
          },
          {
            path: "read",
            element: <ReadBlog />,
          },
        ],
      },
      {
        path: "reading/:blogID",
        element: <BlogDetails />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <Toaster position="top-center" />
      <WebSocketContextProvider>
        <RouterProvider router={appRouter}></RouterProvider>
      </WebSocketContextProvider>
    </>
  );
};

export default App;

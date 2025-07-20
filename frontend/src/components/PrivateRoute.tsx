import { useEffect, useState } from "react";
import { isAuthUser } from "../api/userLogin";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const [auth, setAuth] = useState<boolean | null>(null);
  useEffect(() => {
    const authUser = async () => {
      try {
        const resposne = await isAuthUser();
        if (resposne.ok) {
          setAuth(true);
        } else {
          setAuth(false);
        }
      } catch (e) {
        setAuth(false);
        console.log(e);
      }
    };
    authUser();
  }, []);

  if (auth === null) {
    return <div>Loading....</div>;
  }
  return <>{auth ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;

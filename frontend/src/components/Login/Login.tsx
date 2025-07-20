import { useEffect, useState } from "react";
import { signin, signUp, verifyOTP } from "../../api/userLogin";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import OTPInput from "./OTPInput";
import { isAuthUser } from "../../api/userLogin";

interface UserData {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

const Login = () => {
  const [otpStep, setOtpStep] = useState<boolean>(false);
  const [inputBox, setInputBox] = useState<string[]>(["", "", "", ""]);
  const [isLoginPage, setIsLoginPage] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [seconds, setSeconds] = useState<number>(60);
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const authUser = async () => {
      try {
        const token: string | null = localStorage.getItem("token");
        if (!token) {
          return;
        }
        const resposne = await isAuthUser();
        if (resposne.ok) {
          navigate("/auth");
        } else {
          navigate("/login");
        }
      } catch (e) {
        navigate("/login");
      }
    };
    authUser();
  }, [navigate]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (otpStep) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          clearInterval(interval);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [otpStep, seconds]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserData((prevValue) => {
      const newValue = {
        ...prevValue,
        [name]: value,
      };
      return newValue;
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (otpStep) {
        const otp = parseInt(
          inputBox[0] + inputBox[1] + inputBox[2] + inputBox[3]
        );
        const response = await verifyOTP(userData, otp);
        const responseInJSON = await response.json();
        if (response.ok) {
          localStorage.setItem("token", responseInJSON.token);
          navigate("/auth");
        } else {
          setError(responseInJSON.message);
        }
      } else if (isLoginPage) {
        const response = await signin(userData);
        const responseInJSON = await response.json();
        if (response.ok) {
          localStorage.setItem("token", responseInJSON.token);
          navigate("/auth");
        } else {
          setError(responseInJSON.message);
        }
      } else {
        toast
          .promise(signUp(userData), {
            loading: "Verifing...",
            success: <b>OTP has been sent to your email</b>,
            error: (err) => <b>{err.response.message}</b>,
          })
          .then(() => {
            setOtpStep(true);
          })
          .catch((e) => {
            setError(e.response.message);
          });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const resendOTP = () => {
    toast
      .promise(signUp(userData), {
        loading: "Resending...",
        success: <b>OTP has been sent to your email</b>,
        error: (err) => <b>{err.response.message}</b>,
      })
      .then(() => {
        console.log("resent");
      })
      .catch((e) => {
        setError(e.response.message);
      });
  };

  return (
    <div className="m-auto w-[40%] bg-black bg-opacity-30 h-[32rem] ">
      <h2 className="text-white pt-6 font-bold text-2xl font-roboto text-center">
        {isLoginPage ? "Log In" : "Sign Up"}
      </h2>
      <h3 className="text-red-500 text-center h-6">{error}</h3>
      <div className="text-white flex flex-col gap-5 my-10 m-auto w-[60%]">
        <form onSubmit={handleFormSubmit} className="font-roboto">
          {!otpStep && !isLoginPage && (
            <div className="relative my-3">
              <label
                className="absolute -top-1 left-5 z-10  px-2 bg-slate-950 text-[11px]"
                htmlFor="firstName"
              >
                First name
              </label>
              <input
                required
                autoComplete="off"
                onChange={handleChange}
                name="firstName"
                className="border my-1 outline-none bg-transparent w-full rounded-2xl px-4 py-2"
                id="firstName"
              ></input>
            </div>
          )}
          {!otpStep && !isLoginPage && (
            <div className="relative my-3">
              <label
                className="absolute -top-1 left-5 text-[11px] z-10  px-2 bg-slate-950 text-xs"
                htmlFor="lastName"
              >
                Last name
              </label>
              <input
                required
                autoComplete="off"
                name="lastName"
                onChange={handleChange}
                className="border  my-1 outline-none bg-transparent w-full rounded-2xl px-4 py-2"
                id="lastName"
              ></input>
            </div>
          )}
          {!otpStep && (
            <div className="relative my-3">
              <label
                className="absolute -top-1 left-5 text-[11px] z-10  px-2 bg-slate-950 text-xs"
                htmlFor="email"
              >
                Email
              </label>
              <input
                name="email"
                required
                autoComplete="off"
                onChange={handleChange}
                className="border my-1 outline-none bg-transparent w-full rounded-2xl px-4 py-2"
                id="email"
              ></input>
            </div>
          )}
          {!otpStep && (
            <div className="relative my-3">
              <label
                className="absolute -top-1 left-5 z-10 text-[11px] bg-slate-950 px-2  text-xs"
                htmlFor="password"
              >
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                autoComplete="off"
                onChange={handleChange}
                className="border my-1 outline-none bg-transparent w-full rounded-2xl px-4 py-2"
                id="password"
              ></input>
            </div>
          )}
          {otpStep && (
            <OTPInput inputBox={inputBox} setInputBox={setInputBox} />
          )}
          <button className="bg-white w-full my-2 rounded-full py-3 text-black text-xs">
            {otpStep ? "Verify OTP" : isLoginPage ? "Log in" : "Sign up"}
          </button>
        </form>
        <div className="flex font-roboto justify-center">
          {!otpStep ? (
            <>
              <p className="mx-1">
                {isLoginPage
                  ? "Want to create an account ?"
                  : "Already a user ?"}
              </p>
              <button
                className="underline"
                onClick={() => setIsLoginPage(!isLoginPage)}
              >
                {isLoginPage ? "Sign up" : "Log in"}
              </button>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-3 justify-center items-center">
                <p>Didn't get OTP ? Try after {seconds} seconds.</p>
                <button
                  disabled={seconds !== 0}
                  onClick={resendOTP}
                  className={`px-2 py-1 text-sm ${
                    seconds > 0 ? "bg-gray-500" : "bg-white"
                  } text-black rounded-lg`}
                >
                  Resend
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

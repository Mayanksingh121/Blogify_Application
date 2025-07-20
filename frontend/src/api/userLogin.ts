import { BASE_URL } from "../utils/constants";

interface UserData {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

export const signUp = async (userData: UserData): Promise<Response> => {
  try {
    const response = fetch(`${BASE_URL}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: userData.firstName,
        lastName: userData.lastName,
        userEmail: userData.email,
        password: userData.password,
      }),
    });
    return response;
  } catch (e) {
    throw e;
  }
};

export const isAuthUser = async (): Promise<Response> => {
  try {
    const response = await fetch(`${BASE_URL}/user/auth`, {
      method: "POST",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response;
  } catch (e) {
    console.log("Error in auth");
    throw e;
  }
};

export const signin = async (userData: UserData): Promise<Response> => {
  try {
    const response = await fetch(`${BASE_URL}/user/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: userData.email,
        password: userData.password,
      }),
    });
    return response;
  } catch (e) {
    throw e;
  }
};

export const verifyOTP = async (
  userData: UserData,
  otp: number
): Promise<Response> => {
  try {
    const response = await fetch(`${BASE_URL}/user/verifyOTP`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp: otp,
        firstName: userData.firstName,
        lastName: userData.lastName,
        userEmail: userData.email,
        password: userData.password,
      }),
    });

    return response;
  } catch (e) {
    throw e;
  }
};

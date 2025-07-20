import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "authentication",
    initialState: {
        isUserLoggedIn: false,
    },
    reducers: {
        setUserLoginStatus: (state,action)=>{
            state.isUserLoggedIn = action.payload;
        }
    }
})

export const {setUserLoginStatus} = authSlice.actions;
export default authSlice.reducer;
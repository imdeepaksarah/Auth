import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logIn, ragister } from "./authSerives";

const userExist = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: userExist ? userExist : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    serviceLogout: (state, action) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "User Invalid";
      })
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading =true;

      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading=false,
        state.user=action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user=null
        state.isError=true
        state.isLoading=false
      })

  },
});

export default authSlice.reducer;
export const { serviceLogout } = authSlice.actions;

export const registerUser = createAsyncThunk(
  "REGISTER/USER",
  async (formData) => {
    try {
      console.log("jjj");
      return await ragister(formData);
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginUser = createAsyncThunk("LOGIN/USER", async (Data) => {
  try {
    return await logIn(Data);
    
  } catch (error) {
    console.log(error);
  }
});

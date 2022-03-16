import { configureStore, createSlice } from "@reduxjs/toolkit";
const loginSlice = createSlice({
  name: "login",
  initialState: {
    forgotPassword: false,
    register: true,
    islogin: true,
    viewuser: sessionStorage.getItem("viewuserid"),
    tablename:sessionStorage.getItem("tablename"),
    chairname:sessionStorage.getItem("chairname"),
    userid:sessionStorage.getItem("userid")
  },
  reducers: {
    changePassword(state) {
      state.forgotPassword = true;
    },
    newRegister(state) {
      state.register = false;
    },
    loginhandler(state) {
      state.islogin = true;
    },
    viewuserhandle(state, actions) {
      state.islogin = actions.payload;
    },
  },
});
export const loginAction = loginSlice.actions;
const Store = configureStore(loginSlice);
export default Store;

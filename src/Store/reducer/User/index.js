import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  email: '',
  password: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      state.value += action.payload;
    },
    userLogin: (state, action) => {
      console.log('HereInTheReducer', action);
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isLoggedIn = true;
    },
    userLogout: (state, action) => {
      console.log(state, 'state');
      state.isLoggedIn = false;
      state.userName = '';
      state.email = '';
      state.password = '';
    },
  },
});
const {actions, reducer} = userSlice;

export const {userSignup, userSignin, userLogin, userLogout} = actions;

export default userSlice.reducer;

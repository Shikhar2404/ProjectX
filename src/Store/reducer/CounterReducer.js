import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state, action) => {
      console.log('ActionInReducer', action, state.value);
      state.value += action.payload;
    },
    decremented: (state, action) => {
      state.value -= action.payload;
    },
  },
});
const {actions, reducer} = counterSlice;
export const {incremented, decremented} = actions;
export default counterSlice.reducer;

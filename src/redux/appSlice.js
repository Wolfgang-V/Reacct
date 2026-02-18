import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
  name: "appslice",
  initialState: {
    firstName:"",
    lastName:"",
    email:"",
    friends:[]
  }})
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//     },
//   },
// });

// export const { setUser } = appSlice.actions;
// export default appSlice.reducer;
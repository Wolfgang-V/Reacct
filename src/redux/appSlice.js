import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
  name: "appslice",
  initialState: {
    firstName:"wG",
    lastName:"",
    email:"",
    friends:["md", 'saif', 'sami', 'sharif']
  },

  reducers:{

    changeFirst:(state)=>{
      state.firstName="wG Ventures"
    },

changeNameWithSome:(state, actions)=>{
  state.firstName= actions.payload

}


  }

})




export default appSlice.reducer
export const {changeFirst, changeNameWithSome}= appSlice.actions





//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//     },
//   },
// });

// export const { setUser } = appSlice.actions;
// export default appSlice.reducer;
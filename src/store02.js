import { configureStore, createSlice } from "@reduxjs/toolkit";

let num = createSlice({
  name:'num',
  initialState:10,
  reducers:{
    changeNum(state,action){
      console.log(action);
      return state += action.payload;
    }
  }
})

export let {changeNum}  = num.actions;
export default configureStore({
  reducer:{
    num: num.reducer
  }
})
import { configureStore, createSlice } from "@reduxjs/toolkit";


// 만들기
let counter = createSlice({
  name:'counter',
  initialState: 1,
  reducers:{
    changeCoute(state){
      return state += 1;
    }
  }
})

export let {changeCoute} = counter.actions;

let cart = createSlice({
  name:'cart',
  initialState:[
    {id: 0, product:'상품1', price:5000},
    {id: 1, product:'상품2', price:7000},
    {id: 2, product:'상품3', price:4000}
  ]
})
//  내보내기 -> 사용하기
export default configureStore({
  reducer:{
    counter:counter.reducer,
    cart:cart.reducer
  }
})


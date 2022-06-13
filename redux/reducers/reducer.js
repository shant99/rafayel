import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
   carousel: false ,
   carousel2: false ,
   arr1: [] ,
   arr2: []
};

export let asyncFunction = createAsyncThunk(
  "asyncFunction",
  async function (a, b) {
    // 1 parametr ayn inch karoxes tal dispatchov , 2 {}
    const response = await fetch(
      "https://stylique.am/images/videos/apply_1.mp4"
    );
    const data = await response.json();
    return data;
  }
);

const reducer = createSlice({
  name: "vendorsPageSlice",
  initialState,
  reducers: {
    setCarousel: (state, action) => {
      state.carousel = action.payload;
    } ,
    setCarousel2: (state, action)=>{
      state.carousel2 = action.payload;
    }
  },
});

export let { setCarousel , setCarousel2 } = reducer.actions;
export default reducer.reducer;
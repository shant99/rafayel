import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  carousel: false,
  carousel2: false,
  home: {
    name: "home",
    height: 0,
  },
  aboutMe: {
    name: "aboutme",
    height: 0,
  },
  design: {
    name: "design",
    height: 0,
  },
  photography: {
    name: "photography",
    height: 0,
  },
  contact: {
    name: "contact",
    height: 0,
  },
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
    },
    setCarousel2: (state, action) => {
      state.carousel2 = action.payload;
    },
    setHome: (state, action) => {
      state.home.height = action.payload;
    },
    setAboutMe: (state, action) => {
      state.aboutMe.height = action.payload;
    },
    setDesign: (state, action) => {
      state.design.height = action.payload;
    },
    setPhotography: (state, action) => {
      state.photography.height = action.payload;
    },
    setContact: (state, action) => {
      state.contact.height = action.payload;
    },
  },
});

export let {
  setCarousel,
  setCarousel2,
  setHome,
  setAboutMe,
  setDesign,
  setPhotography,
  setContact,
} = reducer.actions;
export default reducer.reducer;

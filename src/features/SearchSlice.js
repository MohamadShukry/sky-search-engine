import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    searchTerm: "",
//   searchResults: [],
}

const SearchSlice = createSlice({

name:'searchitem',
initialState,
reducers: {
    setSearchTerm: (state, action) => {
      // This reducer sets the search term in the state
      state.searchTerm = action.payload;
    },
    // setSearchResults: (state, action) => {
    //   // This reducer sets the search results in the state
    //   state.searchResults = action.payload;
    // },
  },

})
export const typedTerm = state=>state.search.searchTerm
export default SearchSlice.reducer;
export const {setSearchTerm} = SearchSlice.actions;
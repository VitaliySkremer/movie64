import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: {id: string} = {
  id: 'tt1375666'
}

export const movieIdSlice = createSlice({
  name:'movieId',
  initialState,
  reducers:{
    setIdMovie:(state,action:PayloadAction<string>)=>{
      state.id = action.payload
    }
  }
})

export const {setIdMovie} = movieIdSlice.actions;
export default movieIdSlice.reducer
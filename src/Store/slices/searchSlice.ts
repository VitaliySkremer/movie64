import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IParametersSearch {
  title: string;
  genres: Array<string>;
  groups: Array<string>;
}

const initialState:IParametersSearch = {
  title:'',
  genres:[],
  groups:[]
}

export const parametersSlice = createSlice({
  name:'parametersSearch',
  initialState,
  reducers:{
    setTitle:(state,action:PayloadAction<string>)=>{
      state.title = action.payload
    },
    addGenres:(state,action:PayloadAction<string>)=>{
      state.genres.push(action.payload)
    },
    addGroups:(state,action:PayloadAction<string>)=>{
      state.groups.push(action.payload)
    },
    removeGenres:(state,action:PayloadAction<string>)=>{
      state.genres = state.genres.filter(item=> item!==action.payload)
    },
    removeGroups:(state,action:PayloadAction<string>)=>{
      state.groups = state.groups.filter(item=> item!==action.payload)
    },
  }
})

export const {setTitle,addGenres,addGroups,removeGenres,removeGroups} = parametersSlice.actions;
export default parametersSlice.reducer;
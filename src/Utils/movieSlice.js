import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
       nowPlayingMovies:null,
       trailerVideo:null,
       popularMovies:null,
       trendingMovies:null,
       upcomingMovies:null,
    },

    reducers :{
        addNowPlayingMovies: (state,action)=>{
           state.nowPlayingMovies=action.payload;
        },
        addNowPopularMovies: (state,action)=>{
           state.popularMovies=action.payload;
        },
        addNowTrendingMovies: (state,action)=>{
           state.trendingMovies=action.payload;
        },
        addNowUpcomingMovies: (state,action)=>{
           state.upcomingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
    },
});
export const{addNowPlayingMovies,addTrailerVideo,addNowPopularMovies,addNowTrendingMovies,addNowUpcomingMovies}=movieSlice.actions;
export default movieSlice.reducer;
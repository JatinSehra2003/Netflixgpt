import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import {addNowTrendingMovies} from "../Utils/movieSlice"
const useTrendingMovies =()=>{
    const dispatch=useDispatch();
    const getTrendingMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
  
      const json= await data.json();
      console.log(json.results);
      dispatch(addNowTrendingMovies(json.results));
    }
    useEffect(()=>{
    getTrendingMovies();
    },[])
}

export default useTrendingMovies;
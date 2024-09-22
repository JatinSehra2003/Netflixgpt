import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import {addTrailerVideo} from "../Utils/movieSlice"
const useMovieTrailor=(movieId)=>{
   
    const dispatch=useDispatch();
    //fetch the trailer videos 
     const getMovieVideos= async()=>{
           const data= await fetch('https://api.themoviedb.org/3/movie/'+ movieId + '/videos?language=en-US', API_OPTIONS)
           const json= await data.json();
          // console.log(json);
  
           const filterData= json.results.filter((video)=>video.type==="Trailer");
          // console.log(filterData);
          const trailer= filterData.length ? filterData[0] :json.results[0];
          //console.log(trailer);
          dispatch(addTrailerVideo(trailer));
  
     }
    
    useEffect(()=>{
         getMovieVideos();
    },[])
    
}

export default useMovieTrailor;
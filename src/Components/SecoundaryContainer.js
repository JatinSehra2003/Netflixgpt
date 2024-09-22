import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecoundaryContainer=()=>{
    const movies=useSelector((store)=>store.movies);
  
  return(
      <div className="z-50 relative">
     <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
    );
};

export default SecoundaryContainer;
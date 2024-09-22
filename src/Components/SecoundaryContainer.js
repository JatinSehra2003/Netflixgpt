import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecoundaryContainer=()=>{
    const movies=useSelector((store)=>store.movies);
  
  return(
    <div className="bg-black ">
 <div className="-mt-42  z-50 relative">
     <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Trending"} movies={movies.trendingMovies}/>
     <MovieList title={"Popular"} movies={movies.popularMovies}/>
     <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
     <MovieList title={"Top Rated"} movies={movies.trendingMovies}/>
      </div>
    </div>
     
    );
};

export default SecoundaryContainer;
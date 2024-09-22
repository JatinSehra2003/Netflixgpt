
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTrendingMovies from "../Hooks/useTrendingMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from './MainContainer'
import SecoundaryContainer from './SecoundaryContainer'
const Browse=()=>{
    
    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    useUpcomingMovies();
    return(
    <div>
    <Header/>
    <MainContainer/>
    <SecoundaryContainer/>
    </div>
    );
};
export default Browse;

import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTrendingMovies from "../Hooks/useTrendingMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import GptSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from './MainContainer'
import SecoundaryContainer from './SecoundaryContainer'
const Browse=()=>{
    const ShowGptSearch=useSelector(store =>store.gpt.ShowGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    useUpcomingMovies();
    return(
    <div>
    <Header/>
    { ShowGptSearch ? (
            <GptSearch/>
        ) :(
       
       <>
       <MainContainer/>
       <SecoundaryContainer/>
       </>


    )}
    </div>
    );
};
export default Browse;
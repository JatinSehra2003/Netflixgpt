import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) {
    return ;
  }

  const mainMovie = movies[0];
 // console.log(mainMovie);
  const { original_title, overview, id  } = mainMovie ;

  return (
    <div className="z-20 flex w-full md:h-screen md:items-center">
      <VideoTitle title={original_title} overview={overview }/>
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;

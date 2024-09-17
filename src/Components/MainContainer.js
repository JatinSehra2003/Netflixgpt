import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) {
    return ;
  }

  const mainMovie = movies[0];
  console.log(mainMovie);
  const { original_title, overview } = mainMovie ;

  return (
    <div className="absolute top-0 left-0 z-20 flex w-full h-screen p-5 md:items-center">
      <VideoTitle title={original_title} overview={overview }/>
      <VideoBackground />
    </div>
  );
};

export default MainContainer;

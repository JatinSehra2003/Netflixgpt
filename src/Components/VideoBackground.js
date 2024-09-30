import { useSelector } from "react-redux";
import useMovieTrailor from "../Hooks/useMovieTrailor";

const VideoBackground=({movieId})=>{
  const trailerVideo=useSelector(store => store.movies?.trailerVideo)
  useMovieTrailor(movieId);
  return(
  <div className="md:absolute top-0 left-0 w-screen ">
 <iframe  
 className="w-screen aspect-video"
 src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}&controls=0`}
 title="YouTube video player" 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
 referrerpolicy="strict-origin-when-cross-origin"
 
 >
 </iframe>
  </div>
    );
};

export default VideoBackground;
const VideoTitle = ({title,overview}) => {
    return (
      <div className="z-20 flex flex-col items-start justify-center gap-5 mb-10 text-white md:w-1/2 md:px-20">
        <h1 className="text-6xl font-bold">
          {title}
        </h1>
        
      
        <p className="py-6 text-lg w-1/4">
          {overview}
        </p>
  
        <div className="flex justify-center w-full gap-5 mt-5 md:justify-start">
          <button 
            className="bg-red-500 text-white py-2 px-4 rounded mr-4" 
            aria-label="Play the movie"
          >
            Play
          </button>
          
          <button 
            className="bg-gray-500 text-white py-2 px-4 rounded" 
            aria-label="Get more information about the movie"
          >
            More Info
          </button>
        </div>
      </div>
    );
  };
  
  export default VideoTitle;
  
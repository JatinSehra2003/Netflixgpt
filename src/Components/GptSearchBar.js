import { useDispatch, useSelector } from "react-redux";
import { useRef } from 'react';
import lang from "../Utils/languageConstants";
import client from "../Utils/openai";
import { API_OPTIONS } from "../Utils/constants";
import { addGptMovieResult } from "../Utils/gptSlice";
const GptSearchBar = () => {
 const dispatch=useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

//Search movie in TMDB
const searchMovieTMDB= async (movie)=>{
 const data=await  fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
 const json= await data.json();
  
 return json.results;

}

  const handleGptSearchClick = async () => {
    const movieRecommendationQuery = `Act as a Movie Recommendation system and suggest 5 movies for the query: ${searchText.current.value}. Just give me the movie names comma seprated no other message `;

    
      const response = await client.chat.completions.create({
        messages: [{ role: 'user', content: movieRecommendationQuery }],
        model: 'llama3-8b-8192',
      });
      console.log(response.choices?.[0]?.message?.content);

      const gptMovies=response.choices?.[0]?.message?.content.split(',');
      const promiseArray=gptMovies.map(movie =>searchMovieTMDB(movie));
  const tmdbresults= await Promise.all(promiseArray);
    console.log(tmdbresults);
    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbresults}))
  };

  return (
    <div className="pt-[10%] p-5 flex justify-center mt-10">
      <form className="md:w-1/2 w-full bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type="text" placeholder={lang[langKey].gptSearchPlaceholder} className="p-4 m-4 col-span-9" />
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4" onClick={handleGptSearchClick}>{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
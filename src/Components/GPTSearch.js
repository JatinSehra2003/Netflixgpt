import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GPTSearch=()=>{
    return(
      <div>
        <div className=" fixed -z-10 top-0 left-0 h-screen w-screen">
       <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_small.jpg' alt='bg-logo' className="w-full h-full object-cover"/>
       </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
      </div>
    );
};
export default GPTSearch;
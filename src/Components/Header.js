import {  signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { useEffect } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, User_Avatar } from "../Utils/constants";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";
import N from "../assets/N.png"

const Header=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector((store)=>store.user);
    const ShowGptSearch=useSelector((store)=>store.gpt.ShowGptSearch)
  const handleSignOut=()=>{
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        navigate('/error');
      });
      
    }
    useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
           
          const {uid,email} = user;
          dispatch(addUser({uid:uid,email:email}));
          navigate('/browse');
        } else {
          // User is signed out
           dispatch(removeUser());
           navigate('/');
        }
      });

    //Unsubscribe when my component unmounts
      return ()=> unsubscribe();
      
     },[])
     
  const handleGptSearchClick= ()=>{
    //Toggle Gpt search 
    dispatch(toggleGptSearchView());
  }
 const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
 }
  return(
        <div className=" fixed w-full px-8 py-2 bg-gradient-to-b from-black  flex justify-between items-center top-0 left-0 z-[70] ">
          <div>
        <img src={N} className="w-10 md:hidden" alt="n"/>
          <img className="w-40 hidden md:block" src={LOGO} alt='netflix-logo'/>
          </div>
         {user&&(<div className='flex p-2 justify-between items-center'>
          {ShowGptSearch && (
             <select className="p-2 bg-gray-900 text-white rounded-lg mx-2" onChange={handleLanguageChange}>
             {SUPPORTED_LANGUAGES.map(lang =>  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
           </select>
          )}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-0 m-2" onClick={handleGptSearchClick}>
           {ShowGptSearch ? "Home": " AI🔍"}
          </button>
          <div className="flex flex-col items-center">
          <img className ='w-12 h-12 'src={User_Avatar} alt="user-icon"/>
         
         <button onClick={handleSignOut} className="font-bold text-white cursor-pointer">(SignOut)</button>
         </div>
         </div>)}
           

        </div>
       
    );
};
export default Header;
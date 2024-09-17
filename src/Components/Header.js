import {  signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { useEffect } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO, User_Avatar } from "../Utils/constants";

const Header=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector((store)=>store.user)
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
     
  
  return(
        <div className=" absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
          <div>
          <img className="w-40" src={LOGO} alt='netflix-logo'/>
          </div>
         {user&&(<div className='flex p-2'>
          <img className ='w-12 h-12 'src={User_Avatar} alt="user-icon"/>
         
         <button onClick={handleSignOut} className="font-bold text-white">(SignOut)</button>
         </div>)}
           

        </div>
       
    );
};
export default Header;
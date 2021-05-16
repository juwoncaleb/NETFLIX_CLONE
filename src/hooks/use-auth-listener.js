import {useEffect, useContext, useState  } from "react";
import {FirebaseContext} from '../context/firebase';

// listen to the users state 
export default function useAuthListener (){
    // to check if there is a user in local starage 
const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
// use firebase to check for authentication change 
const {firebase} = useContext(FirebaseContext);
// useEffect to ru on the first iteration of the application
useEffect(() => {
   const listener = firebase.auth().onAuthStateChanged((authUser)=>{
    // Store user in the local storage   
    if (authUser) {
         localStorage.setItem('authUser', JSON.stringify(authUser));
           setUser(authUser);
       } else {
           localStorage.removeItem('authUser');
           setUser(null);
       }
   });
   return ()=> listener(); 
}, [])

return {user};
}
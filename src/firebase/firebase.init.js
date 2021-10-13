import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication ;


/*
 steps for aunthentication
 -------------------
  setep -1 : initial setup
 1. firebase: create project
 2. create web app
 3. get configuration
 4. initialize firebase
 5. Enavle auth method

 ----------------------------------
 step-2 : Setup Component
 1. Create Login Component
 2. Create Register Component
 3. Create Route for Login and Register

 ----------------------

 step -3 : set auth system
 1. setup sing in method
 2. setup sing out method
 3. user state
 4. special observeer (useEffect)
 5. return necessary methods and states from useFirebase

 ------------------------------

 setp -4 : create auth context hook (useAuth)
 1. create a auth context
 2. Create context Proider
 3. set Context Provider Contaxt value 
 4. use Auth Provider
 5. create useAuth hook

---------------------------

setp -5 : Create Private Route
1. create private Route
2. set private route

------------------------

setp -6 : Redirect after login
1. after login redirect user to their desired destination

*/ 
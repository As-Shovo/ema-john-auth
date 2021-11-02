import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, getIdToken } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user , setUser] = useState({});

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signIUsInGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
        
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }



    // observeer
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                .then(idToken => localStorage.setItem('idToken',idToken))



              setUser(user)
            } else {
              // User is signed out
              // ...
            }
          });
    },[]);

    return {
        user,
        signIUsInGoogle,
        logOut

    }

}

export default useFirebase ;
import { createContext, useContext, useEffect } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, 
    onAuthStateChanged, signOut,sendPasswordResetEmail} from 'firebase/auth'
import {auth} from '../firebase'
import { useState } from "react";
 export const authContext = createContext();

  export const useAuth=()=>{
    const contex= useContext(authContext);
    if (!contex) throw new Error('no hay provider')
    return contex

 }


 export function AuthProvider({children}){
    const [user,setUser]=useState(null)
    const [loading, setLoading]=useState(true);

    const signup = (email, password)=>createUserWithEmailAndPassword(auth, email, password);
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const logout =()=> signOut(auth);
    const resetPassword=(email)=>{
        sendPasswordResetEmail(auth,email)
    }
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        });
        return ()=> unSubscribe();
    },[])
return(

 
    <authContext.Provider value={{signup, login, user, logout,loading ,resetPassword}}>
        {children}

    </authContext.Provider>
)

}
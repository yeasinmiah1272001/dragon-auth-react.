import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app);



const AuthProvider = ({children}) => {

       const [user, setUser] = useState(null)
       const [loading, setLoading] = useState(true)

       const createUser = (email, password) =>{
              setLoading(true)
             return createUserWithEmailAndPassword (auth, email, password);

       }

       const signIn = (email, password) =>{
              setLoading(true)
              return createUserWithEmailAndPassword(auth, email, password);
       }

       const logOut = () =>{
              setLoading(true)
            return signOut(auth);
       }

       useEffect(() =>{
              const unSubscribe = onAuthStateChanged(auth, currentUser =>{
                     console.log('hello bangladesh', currentUser)
                     setUser(currentUser)
                     setLoading(false)
              })
              return()=>{
                     unSubscribe();

              }
       },[])

       const AuthInfo = {
         user,
         createUser,
         logOut,
         signIn,
         loading
       };



       return (
              <AuthContext.Provider value={AuthInfo} >
                     {children}
              </AuthContext.Provider>
       );
};

export default AuthProvider;

import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { app } from "../firebase/firebase.config";
import axios from "axios";

const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    //create user 
    const createUser = async (email, password, name, photourl) => {
        setLoading(true)
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(userCredential.user, {
                displayName: name,
                photoURL: 'https://i.ibb.co/CmdNfgx/Passport-Size.jpg'
            })

            return userCredential;

        } catch (error) {
            throw error
        }
    }

    //sign in with googleProvider

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //loging
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logOut
    const logOut = () => {
        return signOut(auth)
    }


    //user Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            try {
                if (currentUser) {
                    setUser(currentUser)
                    const userInfo = { email: currentUser.email }
                    const response = await axios.post("http://localhost:5000/jwt", { userInfo })
                    const token = await response.data.token;
                    console.log("token from authProvider :-",token);
                    localStorage.setItem("fable-access-token", token)
                    setLoading(false)
                }
                else {
                    localStorage.removeItem("fable-access-token")
                    setUser(null);
                    setLoading(false);

                }

            } catch (error) {
                throw error
            }

        });
        return () => {
            return unsubscribe(); //eta jokhon computer off ba aplication of kore dile tokhon se ar observer kore nah 
        }

    }, [])


    const authInfo = {
        createUser,
        logIn,
        logOut,
        user,
        loading,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
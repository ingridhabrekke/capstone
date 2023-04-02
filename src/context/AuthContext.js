import { useContext, createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth';
import { auth } from '../firebase';


// this file that defines the was based on the file with the same name from: 
//Code Commerce. (2022, April 28). Google authentication with REACT JS &amp; firebase - sign in with Google - Firebase V9. YouTube. 
//  Retrieved March 10, 2023, from https://www.youtube.com/watch?v=cZAnibwI9u8 

const AuthContext = createContext();

/**
 * Returns an object from which we can extract the login, logout, and user (information). 
 * @param {*} children - The component with all elements of the given page. 
 */
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

		// google login
    const googleLogIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

		// log out 
    const logOut = () => {
        signOut(auth)
    }

		// set current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ googleLogIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};
import React from 'react';
import { Context } from './Context';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';

// import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';

const ContextProvider = ({ children }) => {


    // SignUp Section
    const createUser = (email,password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // login section
    const handleLogin = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        createUser,
        handleLogin 
    }

    return (
        <Context value={userInfo}>
            {children}
        </Context>
    );
};

export default ContextProvider;
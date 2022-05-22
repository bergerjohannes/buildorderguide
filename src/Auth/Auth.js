import { createContext, useEffect, useState, useContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../FirebaseService'

const userAuthContext = createContext()

export const UserAuthContextProvider = ({ children }) => {

    const [user, setUser] = useState()

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return <userAuthContext.Provider value={{ user, signUp, logIn, logOut }}>{children}</userAuthContext.Provider>
}

export const useUserAuth = () => {
    return useContext(userAuthContext)
}
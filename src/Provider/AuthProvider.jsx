import { useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // signup
  const SignUpFunc = async (email, password) => {
    setAuthLoading(true);
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  // signin
  const singInFunc = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // sign out
  const signOutFunc = async () => {
    setAuthLoading(true);
    return await signOut(auth);
  };

  // update profile
  const updateProfileFunc = async (displayName, photoURL) => {
    setAuthLoading(true);
    return await updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  // email varificaion
  const emailVerificationFunc = async () => {
    setAuthLoading(true);
    return await sendEmailVerification(auth.currentUser);
  };

  // google sing in
  const googleSignInFunc = async () => {
    setAuthLoading(true);
    return await signInWithPopup(auth, googleProvider);
  };

  // reset password
  const resetPasswordFunc = async (email) => {
    setAuthLoading(true)
    return await sendPasswordResetEmail(auth, email);
  };

  // observer for user state(login or log out)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });

    // unmount the observer
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    authLoading,
    setAuthLoading,
    SignUpFunc,
    signOutFunc,
    updateProfileFunc,
    emailVerificationFunc,
    googleSignInFunc,
    singInFunc,
    resetPasswordFunc,
  };
  // console.log(user);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

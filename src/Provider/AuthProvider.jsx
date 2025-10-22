import { useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // signup
  const SignUpFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign out
  const signOutFunc = () => {
    return signOut(auth);
  };

  // update profile
  const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  // email varificaion
  const emailVarificationFunc = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // observer for user state(login or log out)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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
    emailVarificationFunc,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

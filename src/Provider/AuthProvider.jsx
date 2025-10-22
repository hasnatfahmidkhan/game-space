import { useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const SignUpFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
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
    SignUpFunc,
    user,
    setUser,
    authLoading,
    setAuthLoading,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

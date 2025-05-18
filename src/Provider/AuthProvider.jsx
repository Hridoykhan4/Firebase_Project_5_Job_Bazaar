import { useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import app from "../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //   CreateUser
  const createNewUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   SignIn User
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // SignOutUser
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   OnAuthState
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    createNewUserWithEmail,
    user,
    setUser,
    logInUser,
    loading,
    setLoading,
    logOutUser
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;

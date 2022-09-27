import React, { createContext, useState } from "react";

import { FakeSync } from "../helper/FakeSync";
import { IAuthContext } from "./IAuthContext";

export const AuthContext = createContext<IAuthContext>(null!);

const STORAGE_KEY = "STORAGE_KEY:token";

const AuthProvider = (props) => {
  const [user, setuser] = useState(() => {
    return localStorage.getItem(STORAGE_KEY);
  });
  const [token, settoken] = useState(() => {
    return localStorage.getItem(STORAGE_KEY);
  });
  const [password, setpassword] = useState(() => {
    return localStorage.getItem(STORAGE_KEY);
  });

  const signIn = (
    newUser: string,
    newPassword: string,
    callBack: VoidFunction
  ) => {
    return FakeSync.signin(() => {
      const token =
        "fkdfdFASDF0f9dsfdFA.fFasfsa9fFafa9-432432f46ads46fadf.faf6a4df+"; // dummy token
      localStorage.setItem(STORAGE_KEY, token);
      settoken(token);
      setpassword(newPassword);
      setuser(newUser);
      callBack();
    });
  };
  const signOut = (callBack: VoidFunction) => {
    return FakeSync.signin(() => {
      localStorage.clear();
      settoken(null);
      setpassword(null);
      setuser(null);
      callBack();
    });
  };

  return (
    <AuthContext.Provider
      value={{ user: { token, user, password }, signIn, signOut }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

import React, { useState } from "react";
import { AuthContext } from "./AuthContex";

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const authData = {
    user,
    setuser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;

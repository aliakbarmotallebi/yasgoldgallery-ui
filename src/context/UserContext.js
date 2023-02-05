import decodeToken from "helper/decodeToken";
import React, { useState } from "react";
import { createContext } from "react";

export const UserStore = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState(decodeToken("username"));
  return (
    <UserStore.Provider value={{ user, setUser }}>
      {children}
    </UserStore.Provider>
  );
};

export default UserContext;

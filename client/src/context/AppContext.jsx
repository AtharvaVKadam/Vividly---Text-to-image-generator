import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const [isLogin, setIsLogin] = useState(false);

  const value = {
    user,
    setUser,
    isLogin,
    setIsLogin,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;

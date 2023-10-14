// create a context to get user data from backend
// and wrap it in a custom hook to make it reusable.
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState();
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("token");
    return token;
  });

  const URL = import.meta.env.VITE_URL;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${URL}/user/me`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (token) {
      fetchUser();
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{ user, setUser, loggedIn, setLoggedIn, token, setToken }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(
      "useUserContext must be within a UserContextProvider. Make sure the component is wrapped in UserContextProvider"
    );
  }
  return context;
};

export { useUserContext, UserContextProvider };

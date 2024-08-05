import { authWithGoogle } from "./firebase";
const URL = import.meta.env.VITE_URL;

const register = async (userData) => {
  try {
    const response = await fetch(`${URL}/user/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    return response;
  } catch (error) {
    // console.log(error);
  }
};

const login = async (userData, setLoggedIn, setToken) => {
  try {
    const response = await fetch(`${URL}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    const token = await data.token;

    localStorage.setItem("token", token);
    setToken(token);
    setLoggedIn(true);

    return { status: response.status, data: data };
  } catch (error) {
    // console.log(error);
  }
};

const handleGoogleAuth = (e) => {
  e.preventDefault();

  authWithGoogle()
    .then((user) => {
      const { accessToken, photoURL } = user;
      let serverRoute = "google-auth";
      let formData = {
        access_token: accessToken,
        avatar: photoURL,
      };
      console.log(formData)
      fetch(`${URL}/user/register/${serverRoute}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            return console.log("Google auth failed");
          }
        })
        .then((data) => {
          localStorage.setItem("token", data.access_token);
          window.location.href = "/";
        })
        .catch((err) => {
          return console.log(err);
        });
    })
    .catch((err) => {
      return console.log(err);
    });
};

const logout = async () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    // console.log(error);
  }
};

export { register, login, logout, handleGoogleAuth };

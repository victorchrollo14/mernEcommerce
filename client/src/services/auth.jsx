const register = async (userData) => {
  try {
    const response = await fetch("http://localhost:3001/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const login = async (userData, setLoggedIn, setToken) => {
  try {
    const response = await fetch("http://localhost:3001/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    const token = await data.token;

    localStorage.setItem("token", token);
    setToken(token)
    setLoggedIn(true);

    return { status: response.status, data: data };
  } catch (error) {
    console.log(error);
  }
};

const logout = async () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    console.log(error);
  }
};

export { register, login, logout };

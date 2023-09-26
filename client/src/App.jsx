import { Routes } from "./routes";
import { ProductContextProvider } from "./contexts/productContext";
import { UserContextProvider } from "./contexts/userContext";
import { CookiesProvider } from "react-cookie";
import "./Styles.css";

function App() {
  return (
    <CookiesProvider>
      <ProductContextProvider>
        <UserContextProvider>
          <Routes />
        </UserContextProvider>
      </ProductContextProvider>
    </CookiesProvider>
  );
}

export default App;

/* 
    DONE 🍥
    ✅ 
    
    Tasks ⛳
    🌟 set up Routing.
    🌟 create header and footer and mobile navigation components.
    🌟 create homepage.
    🌟 create shopping page.
    🌟 create product page.
 

*/

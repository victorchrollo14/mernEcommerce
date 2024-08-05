import { Routes } from "./routes";
import { ProductContextProvider } from "./contexts/productContext";
import { UserContextProvider } from "./contexts/userContext";
import { CartContextProvider } from "./contexts/cartContext";

import "./Styles.css";
import { CheckoutProvider } from "./contexts/checkoutContext";

function App() {
  return (
    <ProductContextProvider>
      <UserContextProvider>
        <CartContextProvider>
          <CheckoutProvider>
            <Routes />
          </CheckoutProvider>
        </CartContextProvider>
      </UserContextProvider>
    </ProductContextProvider>
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

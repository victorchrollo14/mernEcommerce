import { Routes } from "./routes";
import { ProductContextProvider } from "./contexts/productContext";
import "./Styles.css";

function App() {
  return (
    <ProductContextProvider>
      <Routes />;
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

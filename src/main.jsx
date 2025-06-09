import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/useCart.jsx";
import { ProductsProvider  } from "./context/useProducts.jsx";
createRoot(document.getElementById("root")).render(
  <CartProvider>
    <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ProductsProvider>
  </CartProvider>
);

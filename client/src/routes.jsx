import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home";
import ShopPage from "./pages/shop/Shop";
import ProductPage from "./pages/product/product";
import Cart from "./pages/cart/Cart";
import CheckoutPage from "./pages/checkout/Checkout";
import Contact from "./pages/contact/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="shop/:id" element={<ProductPage />} />
      <Route path="cart" element={<Cart />} />
      <Route path="cart/checkout" element={<CheckoutPage />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

export const Routes = () => {
  return <RouterProvider router={router} />;
};

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
import LoginPage from "./pages/authentication/LoginPage";
import RegisterPage from "./pages/authentication/RegisterPage";
import ProfilePage from "./pages/authentication/ProfilePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="shop/:category" element={<ShopPage />} />
      <Route path="shop/:category/:id" element={<ProductPage />} />
      <Route path="cart" element={<Cart />} />
      <Route path="cart/checkout" element={<CheckoutPage />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="Register" element={<RegisterPage />} />
      <Route path="profile" element={<ProfilePage />} />
    </Route>
  )
);

export const Routes = () => {
  return <RouterProvider router={router} />;
};

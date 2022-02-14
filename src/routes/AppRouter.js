import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Cart from "../containers/Cart";
import Products from "../containers/Products";
import Layout from "../components/Layout";
import UseContext from "../context/UseContext";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <UseContext>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/cart" element={<Cart />}></Route>
              <Route exact path="/products" element={<Products />}></Route>
            </Routes>
          </Layout>
        </UseContext>
      </BrowserRouter>
    </>
  );
}

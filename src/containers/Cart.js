import React, { useContext } from "react";
import Context from "../context/Context";
import ItemCart from "../components/ItemCart";
import "../assets/css/Cart.css";

export default function Cart() {
  const { cart, cartDelete } = useContext(Context);
  return (
    <div>
      <div className="carrito">
        <div className="carrito-listadito">
          {cart.map((item) => console.log(item))}
        </div>

        <div className="carrito-precio">
          Total a pagar <br />
          <strong>U$D 3400</strong>
        </div>
      </div>
    </div>
  );
}

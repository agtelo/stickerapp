import axios from "axios";
import Context from "./Context";
import { useState } from "react";

export default function useContext(props) {
  const { children } = props;
  const estadoInicial = {
    productos: [],
    carrito: [],
  };
  const [state, setState] = useState([]);
  const listProducts = async () => {
    const res = await axios.get(
      "https://devrockstore-default-rtdb.firebaseio.com/productos.json"
    );
    setState(res.data);
    console.log(res.data, "desde UsarContexto()");
  };
  const addToCart = (item) => {
    console.log("Agregamos a carrito", item);
  };
  const cartDelete = (item) => {
    console.log("Eliminar carrito", item);
  };
  return (
    <Context.Provider
      value={{
        productos: state,
        //carrito: state.carrito,
        listProducts,
        addToCart,
        cartDelete,
      }}
    >
      {children}
    </Context.Provider>
  );
}

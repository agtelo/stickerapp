import axios from "axios";
import Context from "./Context";
import { useReducer } from "react";
import Reducer from "./Reducer";

export default function useContext(props) {
  const { children } = props;
  const initialState = {
    products: [],
    cart: [],
  };
  const [state, dispatch] = useReducer(Reducer, initialState);
  const listProducts = async () => {
    const res = await axios.get(
      "https://devrockstore-default-rtdb.firebaseio.com/productos.json"
    );
    dispatch({ type: "LIST_PRODUCTS", payload: res.data });
    console.log(res.data, "desde UsarContexto()");
  };
  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    console.log("Agregamos a carrito", item);
  };
  const cartDelete = (item) => {
    console.log("Eliminar carrito", item);
  };
  return (
    <Context.Provider
      value={{
        products: state.products,
        cart: state.cart,
        listProducts,
        addToCart,
        cartDelete,
      }}
    >
      {children}
    </Context.Provider>
  );
}

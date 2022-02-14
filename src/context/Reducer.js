const LIST_PRODUCTS = "LIST_PRODUCTS";
const ADD_TO_CART = "ADD_TO_CART";
const CART_DELETE = "CART_DELETE";

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case LIST_PRODUCTS:
      return { ...state, products: payload };
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.products.filter((item) => item.id === parseInt(payload)),
      };
    default:
  }
}

import React from "react";
import { showToast } from "../../utils/helper";
import {
  ADD_TO_CART,
  QUANTITY_INCREMENT,
  QUANTITY_DECREMENT,
} from "./shoppingTypes";

// initialize state
const initializeState = {
  products: [
    {
      id: 1,
      title: "Asus Vivobook X515MA",
      stock: 2,
      price: 10,
      error: null,
    },
    {
      id: 2,
      title: "Dell E1916HV 18.5 Inch",
      stock: 35,
      price: 9300,
      error: null,
    },
    {
      id: 3,
      title: "Canon Eos 4000D 18MP",
      stock: 72,
      price: 36500,
      error: null,
    },
  ], // {id, title, price stock }
  carts: [], // {id, title, price, qty, totalPrice}
};
const shoppingReducer = (state = initializeState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // get the items data from the product's array
      const addProduct = state.products.find((p) => p.id === action.payload.id);

      // check if the item is in cart already
      const isAvailableCart = state.carts.find((i) =>
        i.id === action.payload.id ? true : false
      );

      if (addProduct.stock === 0) {
        console.log("True");
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  error: true,
                }
              : item
          ),
        };
      } else {
        // console.log("False");

        if (isAvailableCart) {
          return {
            ...state,
            carts: state.carts.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            ),
            products: state.products.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    stock: item.stock - 1,
                  }
                : item
            ),
          };
        } else {
          // delete addProduct.stock;
          return {
            ...state,
            carts: [
              ...state.carts,
              {
                id: addProduct.id,
                price: addProduct.price,
                title: addProduct.title,
                qty: 1,
              },
            ],
            products: state.products.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    stock: item.stock - 1,
                  }
                : item
            ),
          };
        }
      }

    case QUANTITY_INCREMENT:
      console.log("action.payload.id", action.payload.id);
      // get the cart data from the cart's array
      const iProduct = state.products.find(
        (item) => item.id === action.payload.id
      );

      if (iProduct.stock === 0) {
        console.log("stock limit");
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  error: true,
                }
              : item
          ),
        };
      } else {
        console.log("stock yes");
        return {
          ...state,
          carts: state.carts.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
          products: state.products.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  stock: item.stock - 1,
                }
              : item
          ),
        };
      }

    case QUANTITY_DECREMENT:
      const cDItem = state.carts.find((item) => item.id === action.payload.id);
      console.log("QUANTITY_DECREMENT cDItem", cDItem);

      if (cDItem.qty === 1) {
        if (window.confirm("Are sure to delete the cart product?")) {
          console.log("you can't delete the product");
          showToast('toast-top-right');
          return {
            ...state,
            carts: state.carts.filter((item) => item.id != action.payload.id),
            products: state.products.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    stock: item.stock + 1,
                    error: null,
                  }
                : item
            ),
          };
        }
      } else {
        console.log("stock availabe");
        return {
          ...state,
          carts: state.carts.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty - 1 }
              : item
          ),
          products: state.products.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  stock: item.stock + 1,
                  error: null,
                }
              : item
          ),
        };
      }

    default:
      return { ...state };
  }
};

export default shoppingReducer;

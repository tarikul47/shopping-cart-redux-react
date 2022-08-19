import {
  ADD_TO_CART,
  QUANTITY_INCREMENT,
  QUANTITY_DECREMENT,
} from "./shoppingTypes";

/**
 * Product add in cart
 */
export const addToCart = (itemID) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

/**
 * Cart product quantity increment
 */
export const quantityIncrement = (itemID) => {
  return {
    type: QUANTITY_INCREMENT,
    payload: {
      id: itemID,
    },
  };
};

/**
 * Cart product quantity decrement
 */
export const quantityDecrement = (itemID) => {
  return {
    type: QUANTITY_DECREMENT,
    payload: {
      id: itemID,
    },
  };
};

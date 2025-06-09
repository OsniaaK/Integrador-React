import { createContext, useContext, useState, useEffect } from "react";

const Cart = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );
  const [open, setOpen] = useState(false);

  useEffect(() => localStorage.setItem("cart", JSON.stringify(items)), [items]);

  const toggle = () => setOpen(!open);
  const addItem = (product = {}) => {
    if (items.some((item) => item.id == product.id)) {
      return setItems((items) =>
        items.map((item) => {
          if (item.id == product.id) {
            item.cantidad += 1;
          }
          return item;
        })
      );
    }
    return setItems((items) => [...items, { ...product, cantidad: 1 }]);
  };
  const remove = (current = {}) =>
    setItems((items) => items.filter((item) => item.id != current.id));
  const clear = () => setItems([]);
  const addQuantity = (product = {}) => {
    if (items.some((item) => item.id == product.id)) {
      return setItems((items) =>
        items.map((item) => {
          if (item.id == product.id) {
            item.cantidad += 1;
          }
          return item;
        })
      );
    }
  };
  const reduceQuantity = (product = {}) => {
    if (items.some((item) => item.id == product.id)) {
      return setItems((items) =>
        items.map((item) => {
          if (item.id == product.id) {
            item.cantidad -= 1;
          }
          return item;
        })
      );
    }
  };

  return (
    <Cart.Provider
      value={{
        items,
        open,
        toggle,
        addItem,
        remove,
        clear,
        addQuantity,
        reduceQuantity,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

const useCart = () => useContext(Cart);

export default useCart;

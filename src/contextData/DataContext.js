import React from "react";
import { useState, createContext, useEffect } from "react";
import data from "../ProductStore";

const dataContextCreated = createContext({});
const DataContext = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const handleIncrease = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.count++;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const handleReduce = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id && product.count > 1) {
        product.count--;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const toCartButton = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.cart = !product.cart;
      }
      return product;
    });
    setProducts(newProducts);
  };

  useEffect(() => {
    const toCart = () => {
      setCart(products.filter((product) => product.cart && product));
    };
    toCart();
  }, [products]);

  const utili = {
    products,
    handleIncrease,
    handleReduce,
    toCartButton,
    cart,
  };
  return (
    <dataContextCreated.Provider value={utili}>
      {children}
    </dataContextCreated.Provider>
  );
};

export { DataContext, dataContextCreated };

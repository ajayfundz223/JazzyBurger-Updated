import React from "react";
import { useState, createContext, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
const dataContextCreated = createContext({});

const DataContext = ({ children }) => {
  const {data,isLoading,fetchError} = useAxiosFetch("http://127.0.0.1:8000/api/product")
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    setProducts(data.map((product)=>{
        product.id= product.id
        product.count = 1
        delete product._id
        return product
  }))
  },[data])
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
    isLoading,
    fetchError
  };
  return (
    <dataContextCreated.Provider value={utili}>
      {children}
    </dataContextCreated.Provider>
  );
};

export { DataContext, dataContextCreated };

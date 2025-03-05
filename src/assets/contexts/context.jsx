import React, { createContext, useEffect, useState } from "react";


export const ContextApi = createContext(null);
const URL_BASE = 'https://colorshopapi.onrender.com/api/products ';

function Context({ children }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch(URL_BASE)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); 
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <ContextApi.Provider value={{ products, filteredProducts, setFilteredProducts }}>
      {children}
    </ContextApi.Provider>
  );
}

export default Context;
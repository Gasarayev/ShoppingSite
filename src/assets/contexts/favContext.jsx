import React, { createContext, useEffect, useState } from "react";


export const FavContextApi = createContext(null);
const URL_BASE = 'http://localhost:8000/products';

function FavContext({ children }) {
  const [favs, setFavs] = useState([]);


  return (
    <FavContextApi.Provider value={{ favs, setFavs }}>
      {children}
    </FavContextApi.Provider>
  );
}

export default FavContext;
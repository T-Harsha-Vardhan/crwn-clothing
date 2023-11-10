import SHOP_DATA from "../shop-data.json";

import { createContext, useState, useEffect } from "react";

//as the actual value you want to access
export const ProductsContext = createContext({
  setProductsList: () => null,
  productsList: SHOP_DATA,
});

export const ProductsProvider = ({ children }) => {
  const [productsList, setProductsList] = useState(SHOP_DATA);
  const value = { productsList, setProductsList };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

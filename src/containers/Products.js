import React, { useContext } from "react";
import { useStore } from "../hooks-store/store";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";

const Products = (props) => {
  const state = useStore()[0];
  console.log(state.products);
  return (
    <ul className="products-list">
      {state.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;

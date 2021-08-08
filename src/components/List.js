import React from "react";

import ListGroup from "react-bootstrap/ListGroup";
import ItemList from "./ItemList";

import { useProductsState } from "../context/products";

const List = () => {
  const { products } = useProductsState();
  return (
    <div className='product-list'>
      {products.length === 0 ? (
        <h3>Not items to show...</h3>
      ) : (
        <ListGroup>
          {products.map((product, index) => {
            return <ItemList key={index} product={product} />;
          })}
        </ListGroup>
      )}
    </div>
  );
};

export default List;

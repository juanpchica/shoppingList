import React, { useState } from "react";

//External Components
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//PersonalComponents
import FormApp from "../components/FormApp";
import List from "../components/List";
import { ProductsProvider } from "../context/products";

export const Todo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [product, setProduct] = useState({
    id: "",
    name: "",
    value: "",
  });

  //Function to remove an item from the list
  const removeItem = (itemId) => {
    console.log("click");
    const newProductList = products.filter((item) => {
      return item.id !== itemId;
    });

    setProducts(newProductList);
  };

  return (
    <ProductsProvider>
      <Container style={{ paddingTop: 50 }}>
        <h2>Supermarket ShopList</h2>
        <Row>
          <Col>
            <FormApp />
          </Col>
        </Row>
        <Row>
          <Col>
            <List />
          </Col>
        </Row>
      </Container>
    </ProductsProvider>
  );
};

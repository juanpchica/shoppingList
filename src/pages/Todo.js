import React, { useState } from "react";

//External Components
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//PersonalComponents
import FormApp from "../components/FormApp";

export const Todo = () => {
  const [products, setProducts] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  //Function to remove an item from the list
  const removeItem = (itemId) => {
    console.log("click");
    const newProductList = products.filter((item) => {
      return item.id !== itemId;
    });

    setProducts(newProductList);
  };

  //Function to edit an item from the list
  function editItem(item) {
    setIsEditing(true);
    setEditID(item.id);
    setProduct({ id: item.id, name: item.name, value: item.value });
  }

  return (
    <Container style={{ paddingTop: 50 }}>
      <h2>Supermarket ShopList</h2>
      <Row>
        <Col>
          <FormApp
            setProducts={setProducts}
            setIsEditing={setIsEditing}
            setEditID={setEditID}
            products={setEditID}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <List />
        </Col>
      </Row>
    </Container>
  );
};

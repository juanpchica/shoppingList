import React from "react";

//External Components
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//PersonalComponents
import FormApp from "../components/FormApp";
import List from "../components/List";
import { ProductsProvider } from "../context/products";

export const Todo = () => {
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

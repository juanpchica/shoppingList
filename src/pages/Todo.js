import React, { useState } from "react";

//External Components
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

export const Todo = () => {
  const [products, setProducts] = useState([]);

  return (
    <Container style={{ paddingTop: 50 }}>
      <h2>Supermarket ShopList</h2>
      <Row>
        <Col>
          <div className='form-container'>
            <Form>
              <Form.Group className='mb-3'>
                <Form.Label>Product Name:</Form.Label>
                <Form.Control type='text' placeholder='Enter Product Name' />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Price $: </Form.Label>
                <Form.Control type='text' placeholder='Enter Price: ' />
              </Form.Group>

              <Button variant='primary' type='submit'>
                Add Item
              </Button>
            </Form>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          {products.length == 0 ? (
            <h3>Not items to show...</h3>
          ) : (
            <ListGroup>
              {products.map((product) => {
                return (
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        {product.name} -- $<b>{product.value}</b>
                      </Col>
                      <Col xs='2'>
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          color='red'
                          style={{ marginRight: 10 }}
                        />
                        <FontAwesomeIcon icon={faEdit} />
                      </Col>
                    </Row>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
};

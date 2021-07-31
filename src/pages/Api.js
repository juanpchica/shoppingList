import React from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

export const Api = () => {
  return (
    <Container>
      <Row>
        <Col xs={4}>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

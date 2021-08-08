import React, { Fragment } from "react";

//React
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const ItemList = ({ product, removeItem, editItem }) => {
  return (
    <Fragment>
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
              onClick={(e) => removeItem(product.id)}
            />

            <FontAwesomeIcon icon={faEdit} onClick={(e) => editItem(product)} />
          </Col>
        </Row>
      </ListGroup.Item>
    </Fragment>
  );
};

export default ItemList;

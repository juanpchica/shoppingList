import React, { Fragment } from "react";

//React
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

import { useProductsDispatch } from "../context/products";

const ItemList = ({ product }) => {
  const dispatch = useProductsDispatch();

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
              onClick={(e) =>
                dispatch({ type: "DELETE_PRODUCT", payload: product.id })
              }
            />

            <FontAwesomeIcon
              icon={faEdit}
              onClick={(e) =>
                dispatch({ type: "EDIT_PRODUCT", payload: product })
              }
            />
          </Col>
        </Row>
      </ListGroup.Item>
    </Fragment>
  );
};

export default ItemList;

import React, { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const ItemList = ({ product }) => {
  return (
    <Fragment>
      <ListGroup.Item key={index}>
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

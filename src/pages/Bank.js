import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Bank = () => {
  const [valueAccount, setValueAccount] = useState("");

  const accountValue = useSelector((state) => state.account);

  const [state, dispatch] = useDispatch();

  return (
    <Container style={{ padding: 50 }}>
      <Card>
        <Card.Body>{`Total account $${accountValue}`}</Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Form.Control
            type='text'
            placeholder='Enter Value:'
            name='valueAccount'
            value={valueAccount}
            onChange={(e) => {
              setValueAccount(e.targe.value);
            }}
          />
          <Button variant='primary' className='btn-space'>
            Deposit
          </Button>
          <Button variant='secondary' className='btn-space'>
            Withdraw
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

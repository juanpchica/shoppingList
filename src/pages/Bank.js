import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Bank = () => {
  const [valueAccount, setValueAccount] = useState(0);

  const accountValue = useSelector((state) => state.account);

  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
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
              setValueAccount(e.target.value);
            }}
          />
          <Button
            variant='primary'
            className='btn-space'
            onClick={() => depositMoney(valueAccount)}
          >
            Deposit
          </Button>
          <Button
            variant='secondary'
            className='btn-space'
            onClick={() => withdrawMoney(valueAccount)}
          >
            Withdraw
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

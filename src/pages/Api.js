import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import axios from "axios";

const API_URL = "https://jsonmock.hackerrank.com/api/football_competitions";

export const Api = () => {
  const [dataMenu, setDataMenu] = useState([]);
  const [years, setYears] = useState([]);
  const [loadedData, setLoadedData] = useState(false);

  const getMenuData = () => {
    axios.get(API_URL).then((res) => {
      setDataMenu(res.data);

      getYears(res.data);
    });
  };

  const getYears = (data) => {
    console.log(data);
  };

  useEffect(() => {
    getMenuData();
  }, []);

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

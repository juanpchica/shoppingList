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

  const getYears = (data) => {
    const newDataYears = [
      ...new Set(
        data.map((item) => {
          return item.year;
        })
      ),
    ];

    setYears(newDataYears);
  };

  useEffect(() => {
    const getMenuData = async () => {
      const res = await axios.get(API_URL);
      if (res && res.data) {
        setDataMenu(res.data);
        getYears(res.data.data);
      }
    };

    getMenuData();
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={4}>
          <ListGroup>
            {years && years.length > 0 ? (
              years.map((year, index) => {
                return <ListGroup.Item key={index}>{year}</ListGroup.Item>;
              })
            ) : (
              <h3>Not data found...</h3>
            )}
          </ListGroup>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

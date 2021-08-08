import React, { useState, useEffect, Fragment } from "react";

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
  const [year, setYear] = useState({});
  const [actualYear, setActualYear] = useState([]);
  const [yearNumber, setYearNumber] = useState(null);

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
        setYear(res.data.data[0]);
        getYears(res.data.data);
      }
    };

    getMenuData();
  }, []);

  const showYear = (year) => {
    axios
      .get(`${API_URL}?year=${year}`)
      .then(({ data: { data: championships } }) => {
        setActualYear(championships);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    showYear(yearNumber);
  }, [yearNumber]);

  return (
    <Container>
      <Row>
        <Col xs={4}>
          <ListGroup>
            {years && years.length > 0 ? (
              years.map((year, index) => {
                return (
                  <ListGroup.Item
                    key={index}
                    onClick={() => {
                      setYearNumber(year);
                    }}
                  >
                    {year}
                  </ListGroup.Item>
                );
              })
            ) : (
              <h3>Not data found...</h3>
            )}
          </ListGroup>
        </Col>
        <Col>
          {actualYear.length > 0 ? (
            <ListGroup>
              {actualYear.map((year, index) => {
                return (
                  <ListGroup.Item key={index}>
                    <Fragment>
                      <h2>{year.name}</h2>
                      <span>{year.winner}</span> vs
                      <span> {year.runnerup}</span>
                    </Fragment>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          ) : (
            <Fragment>
              <h2>{year.name}</h2>
              <span>{year.winner}</span> vs
              <span>{year.runnerup}</span>
            </Fragment>
          )}
        </Col>
      </Row>
    </Container>
  );
};

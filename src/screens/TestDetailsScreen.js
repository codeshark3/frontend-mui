import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col, Modal } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
// import { listTestDetails } from "../actions/testActions";
import "../assets/css/index.css";
const TestDetailsScreen = ({ match }) => {
  const dispatch = useDispatch();
  const testDetails = useSelector((state) => state.testDetails);
  const { loading, error, test } = testDetails;
  useEffect(() => {
    // dispatch(listTestDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error} </Message>
      ) : (
        <div>
          <Card className="text-center">
            <Card.Title>Personal Information</Card.Title>
            <div>
              <Card.Body>
                <div className="details-text">
                  <Row>
                    <Col className="table-text">NAME</Col>
                    <Col className="table-text"> {test.name}</Col>
                  </Row>
                  <Row>
                    <Col className="table-text">AGE</Col>
                    <Col className="table-text"> {test.age}</Col>
                  </Row>
                  <Row>
                    <Col className="table-text">GENDER</Col>
                    <Col className="table-text"> {test.sex}</Col>
                  </Row>
                  <Row>
                    <Col className="table-text">LOCATION</Col>
                    <Col className="table-text"> {test.location}</Col>
                  </Row>
                </div>
                <h3
                  style={{ textAlign: "center", textDecoration: "underline" }}
                >
                  Tests
                </h3>
                <div>
                  <Row>
                    <Col className="table-text">ONCHOCERCIASIS</Col>
                    <Col className="table-text">
                      {test.oncho === 1 ? "Positive" : "Negative"}
                    </Col>
                  </Row>
                  <Row>
                    <Col className="table-text">SCHISTOSOMIASIS</Col>
                    <Col className="table-text">
                      {test.schisto === 1 ? "Positive" : "Negative"}{" "}
                    </Col>
                  </Row>
                  <Row>
                    <Col className="table-text">LYMPHATIC FILARIASIS</Col>
                    <Col className="table-text">
                      {test.lf === 1 ? "Positive" : "Negative"}
                    </Col>
                  </Row>
                  <Row>
                    <Col className="table-text">SOIL TRANSMITTED HELMINTHS</Col>
                    <Col className="table-text">
                      {test.helminths === 1 ? "Positive" : "Negative"}
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </div>
          </Card>

          <Link
            to="/tests"
            className="btn btn-block bg-primary  "
            style={{
              color: " var(--txt-white) ",
            }}
          >
            Back
          </Link>
        </div>
      )}
    </div>
  );
};

export default TestDetailsScreen;

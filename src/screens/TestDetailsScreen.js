import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col, Modal } from "react-bootstrap";

import { getTestDetails } from "../store/testDetailSlice";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Header from "../components/global/Header";
import Loader from "../components/Loader";
import Message from "../components/Message";

import "../assets/css/index.css";
import { Typography } from "@mui/material";
const TestDetailsScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const testDetails = useSelector((state) => state.testDetails);
  const { loading, error, test } = testDetails;
  console.log("vjdsj", test);
  useEffect(() => {
    dispatch(getTestDetails(id));
  }, [dispatch, id]);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error} </Message>
      ) : (
        <Box m="20px">
          <Header title="Test details" subtitle="Test details" />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Item>
                <Typography></Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};
export default TestDetailsScreen;

{
  /* <Card className="text-center">
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
</div> */
}

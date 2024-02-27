import React from "react";
import { Card } from "react-bootstrap";

const List = ({ title, tests, ptest, ntest }) => {
  return (
    <Card
      bg="var(--main-color)"
      text="dark"
      // style={{ width: "18rem" }}
      // classNameName="mb-2"
    >
      {/* <Card.Header>Header</Card.Header> */}
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Number of Tests
            <span className="badge bg-primary rounded-pill">{tests}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Positive Results
            <span className="badge bg-primary rounded-pill">{ptest}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Negative Results
            <span className="badge bg-primary rounded-pill">{ntest}</span>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default List;

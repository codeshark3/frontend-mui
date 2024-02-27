import React from "react";
import { Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Tests = ({ tests, loading }) => {
  if (loading) {
    <h2>Loading...</h2>;
  }
  return (
    <Table
      striped
      bordered
      hover
      responsive
      className="table-sm"
      id="excel-export"
    >
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NAME</th>
          <th scope="col">age</th>
          <th scope="col">Gender</th>
          <th scope="col">Location</th>
          <th scope="col">Onchocerciasis</th>
          <th scope="col">Schistosomiasis</th>
          <th scope="col">lf</th>
          <th scope="col">s.T. Helminths</th>
        </tr>
      </thead>
      <tbody>
        {tests.map((test) => (
          <LinkContainer to={`/test/${test._id}`} key={test._id}>
            <tr key={test._id}>
              <td style={{ fontWeight: "bold" }}> {test._id}</td>
              <td style={{ fontWeight: "bold" }}> {test.name}</td>
              <td style={{ fontWeight: "bold" }}> {test.age}</td>
              <td style={{ fontWeight: "bold" }}> {test.sex}</td>
              <td style={{ fontWeight: "bold" }}> {test.location}</td>
              <td style={{ fontWeight: "bold" }}>
                {/* {test.oncho === 1 ? "Positive" : "Negative"} */}
                {test.oncho}
              </td>
              <td style={{ fontWeight: "bold" }}>
                {/* {test.schisto === 1 ? "Positive" : "Negative"} */}
                {test.schisto}
              </td>
              <td style={{ fontWeight: "bold" }}>
                {/* {test.lf === 1 ? "Positive" : "Negative"} */}
                {test.lf}
              </td>
              <td style={{ fontWeight: "bold" }}>
                {/* {test.helminths === 1 ? "Positive" : "Negative"} */}
                {test.helminths}
              </td>
            </tr>
          </LinkContainer>
        ))}
      </tbody>
    </Table>
  );
};

export default Tests;

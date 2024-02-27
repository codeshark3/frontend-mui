import React, { useState, useMemo } from "react";
import { Card, Row, Col, Table } from "react-bootstrap";
import PaginationComponent from "./Pagination";
import TableHeader from "./TableHeader";

const ForecastDatatable = ({ history, keyValue, charts }) => {
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [title, setTitle] = useState("Actual Values and Forecast");
  // const [search, setSearch] = useState("");
  const ITEMS_PER_PAGE = 10;

  const headers = [
    { name: "Dates", field: "date", sortable: false },
    { name: "Actual Values", field: "values", sortable: true },
    { name: "Forecast", field: "forecast", sortable: true },
  ];

  const tableData = useMemo(() => {
    let tableValues = charts;

    setTotalItems(tableValues.length);

    // return tableValues.slice(
    //   (currentPage - 1) * ITEMS_PER_PAGE,
    //   currentPage * ITEMS_PER_PAGE
    // );
  }, [charts, currentPage]);
  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Row className="row w-100">
            <Col className="mb-3 col-12 text-center">
              <Table
                striped
                bordered
                hover
                responsive
                className="table table-sm"
              >
                <TableHeader headers={headers} />

                <tbody>
                  {/* {tableData.map((value) => (
                    <tr key={value.dates}>
                      <td>{value.dates}</td>
                      <td>{value.test_values}</td>
                      <td>{value.forecast}</td>
                    </tr>
                  ))} */}
                </tbody>
              </Table>
              <Row>
                <Col className="col-md-6">
                  <PaginationComponent
                    total={totalItems}
                    itemsPerPage={ITEMS_PER_PAGE}
                    currentPage={currentPage}
                    onPageChange={(page) => setCurrentPage(page)}
                  />
                </Col>
                <Col className="col-md-6 d-flex flex-row-reverse">
                  <div>Mean Squared Error: 7.48</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default ForecastDatatable;

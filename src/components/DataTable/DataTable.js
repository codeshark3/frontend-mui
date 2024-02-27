import React, { useState, useEffect, useMemo } from "react";
import { Card, Row, Col, Table } from "react-bootstrap";
import PaginationComponent from "./Pagination";
import TableHeader from "./TableHeader";
import { withRouter } from "react-router-dom";
import { dataTableAction } from "../../actions/dataTableActions";
import { useDispatch, useSelector } from "react-redux";

import Search from "./Search";
const DataTable = ({ history, keyValue }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const datatableValue = useSelector((state) => state.datatableValue);
  const { odatatable, sdatatable, ldatatable, hdatatable } = datatableValue;
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(odatatable);
  // const [table, setTableData] = useState();
  const [title, setTitle] = useState("Onchocerciasis");
  // const [search, setSearch] = useState("");
  const ITEMS_PER_PAGE = 13;
  // keyValue = "oncho";
  const headers = [
    { name: "Dates", field: "date", sortable: false },
    { name: "Positive", field: "positive", sortable: true },
    { name: "Negative", field: "negative", sortable: true },
    { name: "Total", field: "sum", sortable: false },
  ];

  useEffect(() => {
    if (userInfo) {
      dispatch(dataTableAction());
      switch (keyValue) {
        case "oncho":
          setData(odatatable);
          setTitle("onchocerciasis");

          break;
        case "schisto":
          setData(sdatatable);
          setTitle("schistosomiasis");

          break;
        case "lf":
          setData(ldatatable);
          setTitle("Lymphatic filariasis");

          break;
        case "helminths":
          setData(hdatatable);
          setTitle("soil transmitted helminths");

          break;
        default:
          setData(odatatable);
      }

      //   let table;
      //   let tableValues = data;
      //   setTotalItems(tableValues.length);
      //   table = Array.isArray(tableValues)
      //     ? tableValues.slice(
      //         (currentPage - 1) * ITEMS_PER_PAGE,
      //         currentPage * ITEMS_PER_PAGE
      //       )
      //     : [1, 2, 3];
      //   console.log("data:", data.length);
      //   setTableData(table);
      // } else {
      //   history.push("/login");
    }
  }, [userInfo, history, dispatch, keyValue]);

  // const tableData = useMemo(() => {
  //   let tableValues = data;
  //   console.log("data", odatatable.length);

  //   setTotalItems(tableValues.length);

  //   return tableValues.slice(
  //     (currentPage - 1) * ITEMS_PER_PAGE,
  //     currentPage * ITEMS_PER_PAGE
  //   );
  // }, [
  //   data,
  //   currentPage,
  //   //  odatatable,
  //   // sdatatable,
  //   // ldatatable,
  //   // hdatatable,
  //   // keyValue,
  // ]);

  const tableData = useMemo(() => {
    let tableValues = data;

    // console.log("data", data);
    // if (search) {
    //   tableValues = tableValues.filter((datum) =>
    //     // data.date.toLowerCase().includes(search.toLowerCase) ||
    //     // data.positive.toLowerCase().includes(search.toLowerCase)
    //     datum.positive.includes(search)
    //   );
    // }
    // let caps;
    setTotalItems(tableValues.length);
    // console.log(setTotalItems);
    // caps = tableValues.slice(
    //   (currentPage - 1) * ITEMS_PER_PAGE,
    //   (currentPage - 1) * ITEMS_PER_PAGE * ITEMS_PER_PAGE
    // );
    // console.log(caps);
    // return caps;

    return tableValues.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  }, [
    data,
    currentPage,
    //  odatatable,
    // sdatatable,
    // ldatatable,
    // hdatatable,
    // keyValue,
  ]);

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
                  {tableData.map((value) => (
                    <tr key={value.date}>
                      {/* <th scope="row">{value.date}</th> */}
                      <td>{value.date}</td>
                      <td>{value.positive}</td>
                      <td>{value.negative}</td>
                      <td>{value.sum}</td>
                    </tr>
                  ))}
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
                  {/* <Search
                    onSearch={(value) => {
                      setSearch(value);
                      setCurrentPage(1);
                    }}
                  /> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default DataTable;

import React, { useEffect, useState, useMemo } from "react";
import { Container, Row, Col,  Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  getCount } from "../store/countSlice";
// import { login } from "../store/authSlice";
// import "../assets/css/index.css";
import { Box } from "@mui/material";
import { getCharts } from "../store/chartSlice";
import { getPrediction } from "../store/predictionSlice";
import OnchoChart from "../components/charts/OnchoChart";
import SchistoChart from "../components/charts/SchistoChart";
import LfChart from "../components/charts/LfChart";
import HelminthsChart from "../components/charts/HelminthsChart";
import "../components/badge/badge.css";
import ForecastDatatable from "../components/DataTable/ForecastDatatable";
// import DataTable from "../components/DataTable/DataTable";
import List from "../components/List";
import Loader from "../components/Loader";
import Message from "../components/Message";
import PaginationComponent from "../components/DataTable/Pagination";
import TableHeader from "../components/DataTable/TableHeader";
import { getDataTable } from "../store/dataTableSlice";
import Header from "../components/global/Header";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const DashboardScreen = ({ history }) => {
  const dispatch = useDispatch();
const navigate = useNavigate()
  const userLogin = useSelector((store) => store.auth);
  const { userInfo } = userLogin;
  const countList = useSelector((store) => store.count);
  const { error,  count } = countList;

  const chartValues = useSelector((store) => store.charts);
  const { charts } = chartValues;

  const forecastValue = useSelector((store) => store.prediction);
  const { forecasts,loading } = forecastValue;
  const datatableValue = useSelector((store) => store.dataTable);
  const { odatatable, sdatatable, ldatatable, hdatatable } = datatableValue;

  const [data, setData] = useState([]);

  const [title, setTitle] = useState("Onchocerciasis");
  const [key, setKey] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 13;

  const headers = [
    { name: "Dates", field: "date", sortable: false },
    { name: "Positive", field: "positive", sortable: true },
    { name: "Negative", field: "negative", sortable: true },
    { name: "Total", field: "sum", sortable: false },
  ];

  useEffect(() => {
    setKey("oncho");
    if (userInfo) {
      dispatch(getPrediction());
      dispatch(getCount());
      dispatch(getCharts());
      dispatch(getDataTable());

      // setLabelV(charts.labels);
      // setValueV(charts.values);
    } else {
     navigate("/login");
    }
    switch (key) {
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
  }, [dispatch, history, userInfo, key]);

  // const dataSwitch = (key) => {};

  // const tableData = useMemo(() => {
  //   let tableValues = data;
  //   if (data) {
  //     console.log(" data is recieved");
  //   }
  //   setTotalItems(tableValues.length);

  //   return tableValues.slice(
  //     (currentPage - 1) * ITEMS_PER_PAGE,
  //     currentPage * ITEMS_PER_PAGE
  //   );
  // }, [data, currentPage]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (<>
      <Box display="flex" justifyContent="space-between" alignItems="center ">
        <Header  title="DASHBOARD" subtitle="Your dashboard"/></Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

</Box>
{/*  */}
        <Container fluid style={{ paddingLeft: "0px !important" }}>
         
            {/* <div sm={1}> <Tabs
              activeKey={key}
              onSelect={(k) => setKey(k)}
              id="uncontrolled-tab-example"
              className="mb-3"
              variant="pills"
            >
              <Tab eventKey="oncho" title="Onchocerciasis">
                <OnchoChart charts={charts} forecasts={forecasts} />
              </Tab>
              <Tab eventKey="schisto" title="Schistosomiasis">
                <SchistoChart charts={charts} forecasts={forecasts} />
              </Tab>
              <Tab eventKey="lf" title="Lymphatic Filariasis ">
                <div>
                  <LfChart charts={charts} forecasts={forecasts} />
                </div>
              </Tab>
              <Tab eventKey="helminths" title="S.T. Hemlinths">
                <div>
                  <HelminthsChart charts={charts} forecasts={forecasts} />
                </div>
              </Tab>
            </Tabs>
          </div> */}

          <div>
            <Row>
              <Col className="col-9">
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
                              <tr key={value.date}>
                                <td>{value.date}</td>
                                <td>{value.positive}</td>
                                <td>{value.negative}</td>
                                <td>{value.sum}</td>
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
                          <Col className="col-md-6 d-flex flex-row-reverse"></Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                {/* <DataTable keyValue={key} /> */}
                {/* {
                  {
                    oncho: (
                      <DataTable data={odatatable} title="Onchocerciasis" />
                    ),
                    schisto: (
                      <DataTable data={sdatatable} title="schistosomiasis" />
                    ),
                    lf: (
                      <DataTable
                        data={ldatatable}
                        title="Lymphatic filariasis"
                      />
                    ),
                    helminths: (
                      <DataTable
                        data={hdatatable}
                        title="soil transmitted helminths"
                      />
                    ) || <DataTable data={odatatable} title="Onchocerciasis" />,
                  }[key]
                } */}
              </Col>
{/* 
              <Col className="col-3">
                <List
                  title=" onchocerciasis"
                  tests={count.oTests}
                  ptest={count.opTests}
                  ntest={count.onTests}
                />
                {/* </Col>
              <Col>
                <List
                  title="schistosomiasis"
                  tests={count.sTests}
                  ptest={count.spTests}
                  ntest={count.snTests}
                />
                {/* </Col>
              <Col> 
                <List
                  title=" l. filariasis"
                  tests={count.lTests}
                  ptest={count.lpTests}
                  ntest={count.lnTests}
                />
                {/* </Col>
              <Col> 
                <List
                  title="S. T. Helminths"
                  tests={count.hTests}
                  ptest={count.hpTests}
                  ntest={count.hnTests}
                />
                {/* </Col> 
              </Col> */}
            </Row>
          </div>
          <div>
            {/* <ForecastDatatable keyValue={key} charts={charts} /> */}
          </div>
        </Container>
        </>
      )}
    </div>
  );
};

export default DashboardScreen;

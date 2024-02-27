import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { chartsAction } from "../../actions/chartActions";
import { Card, Row, Col } from "react-bootstrap";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
const HelminthsChart = ({ charts, forecasts }) => {
  // const dispatch = useDispatch();
  // const chartValues = useSelector((state) => state.chartValues);
  // const { charts } = chartValues;

  // useEffect(() => {
  //   dispatch(chartsAction());
  // }, [dispatch]);

  return (
    <Row>
      <Col>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Tests</Card.Title>
            <Line
              data={{
              //  labels: forecasts.map((test) => test.dates),
                datasets: [
                  {
                    label: "Tests",

                  //  data: forecasts.map((test) => test.train_values),
                    // backgroundColor:['red']
                    backgroundColor: "#333366",
                  },
                  // {
                  //   label: "Forecast",

                  //   data: charts.map((test) => test.forecast),
                  //   backgroundColor: "red",
                  //   //backgroundColor: "#333366",
                  // },
                ],
              }}
              type="line"
              width={300}
              height={200}
              options={{
                maintainAspectRatio: true,
                scales: {},
                legend: {
                  labels: {
                    fontSize: 25,
                  },
                },
              }}
            />
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="text-center">
          {/* <Card.Header>Featured</Card.Header> */}
          <Card.Body>
            <Card.Title>Forecast</Card.Title>
            <Line
              data={{
            //    labels: charts.map((test) => test.dates),
                datasets: [
                  {
                    label: "Tests",
                    pointStyle: "circle",
//data: charts.map((test) => test.test_values),
                    // backgroundColor:['red']
                    backgroundColor: "#333366",
                  },
                  {
                    label: "Forecast",
                    pointStyle: "rectRounded",
                   // data: charts.map((test) => test.forecast),
                    backgroundColor: "red",
                    //backgroundColor: "#333366",
                  },
                ],
              }}
              type="line"
              width={300}
              height={200}
              options={{
                maintainAspectRatio: true,
                scales: {
                  // y: {
                  //   type: "linear",
                  //   display: true,
                  //   position: "left",
                  // },
                  // y1: {
                  //   type: "linear",
                  //   display: true,
                  //   position: "right",
                  //   // grid line settings
                  //   grid: {
                  //     drawOnChartArea: false, // only want the grid lines for one axis to show up
                  //   },
                  // },
                },
                legend: {
                  labels: {
                    fontSize: 25,
                  },
                },
              }}
            />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default HelminthsChart;

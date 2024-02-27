// import React from "react";
// // import ReactExport from "react-data-export";
// import { Button } from "react-bootstrap";
// const ExcelFile = ReactExport.ExcelFile;
// const ExcelSheet = ReactExport.ExcelSheet;

// const SpreadSheet = ({ tests }) => {
//   const Dataset = [
//     {
//       columns: [
//         {
//           title: " Id",
//           style: { font: { sz: "16", bold: true } },
//           width: { wpx: 125 },
//         },
//         {
//           title: " Name",
//           style: { font: { sz: "16", bold: true } },
//           width: { wpx: 125 },
//         },
//         {
//           title: " Age",
//           style: { font: { sz: "16", bold: true } },
//           width: { wpx: 125 },
//         },
//         {
//           title: " Gender",
//           style: { font: { sz: "16", bold: true } },
//           width: { wpx: 125 },
//         },
//         {
//           title: "Location",
//           style: { font: { sz: "16", bold: true } },
//           width: { wpx: 125 },
//         },
//         {
//           title: " Onchocerciasis",
//           style: { font: { sz: "16", bold: true } },
//           width: { wpx: 125 },
//         },
//         {
//           title: " Schistosomiasis",
//           style: { font: { sz: "16", bold: true } },
//           width: { wpx: 125 },
//         },
//         {
//           title: "L.F.",
//           style: { font: { sz: "16", bold: true } },
//           width: { wpx: 125 },
//         },
//         {
//           title: "  S.T. Helminths",
//           style: { font: { sz: "16", bold: true } },
//           width: { wpx: 125 },
//         },
//       ],
//       data: tests.map((test) => [
//         { value: test._id, style: { font: { sz: "14" } } },
//         { value: test.name, style: { font: { sz: "14" } } },
//         { value: test.age, style: { font: { sz: "14" } } },
//         { value: test.sex, style: { font: { sz: "14" } } },
//         { value: test.location, style: { font: { sz: "14" } } },
//         {
//           value: test.oncho === 1 ? "Positive" : "Negative",
//           style: { font: { sz: "14" } },
//         },
//         {
//           value: test.schisto === 1 ? "Positive" : "Negative",
//           style: { font: { sz: "14" } },
//         },
//         {
//           value: test.lf === 1 ? "Positive" : "Negative",
//           style: { font: { sz: "14" } },
//         },
//         {
//           value: test.helminths === 1 ? "Positive" : "Negative",
//           style: { font: { sz: "14" } },
//         },
//       ]),
//     },
//   ];

//   return (
//     <ExcelFile
//       filename="Watertest"
//       element={
//         <Button className="btn btn-block btn-primary"> Export to Excel</Button>
//       }
//     >
//       <ExcelSheet dataSet={Dataset} name="WaterTest" />
//     </ExcelFile>
//   );
// };

// export default SpreadSheet;

import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { listTests } from "../store/testSlice";
import { Link } from "react-router-dom";

import Loader from "../components/Loader";
import Message from "../components/Message";
// import SpreadSheet from "../components/SpreadSheet";
// import SearchBox from "../components/SearchBox";
// import Paginate from "../components/Paginate";
import { useNavigate } from "react-router-dom";

import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../components/global/Header";
// import "../assets/css/index.css";

const TestsScreen = ({ history }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((store) => store.auth);
  const { userInfo } = userLogin;
  const testList = useSelector((store) => store.tests);
  const { error, loading, tests } = testList;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  let keyword = "";
  //   // console.log(keyword);
  // console.log(keyword)
  useEffect(() => {
    if (userInfo) {
      dispatch(listTests(keyword));
    } else {
      navigate("/login");
    }
  }, [dispatch, userInfo, keyword]);

  const columns = [
    { field: "_id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },

    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { _id } }) => {
        return (
          <Box
            width="60%"
            height="40px"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={colors.greenAccent[700]}
            borderRadius="4px"
          >
            <Link to={`/tests/${_id}`}>
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                Details
              </Typography>
            </Link>
          </Box>
        );
      },
    },
  ];
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Box m="20px">
          <Header title="TESTS" subtitle="Test data" />
          <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: colors.greenAccent[300],
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[700],
              },
              "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`,
              },
            }}
          >
            <DataGrid
              checkboxSelection
              rows={tests.tests}
              columns={columns}
              getRowId={(r) => r._id}
              slots={{ toolbar: GridToolbar }}
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default TestsScreen;

// const tests = [];

// function search(items) {
//   return items.filter((item) => {
//     return searchParam.some((newItem) => {
//       return (
//         item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
//       );
//     });
//   });
// }
// function handlePageChange(page) {
//   SetCurrentPage(page);
// }

//const handlePageClick = (data) => {};
// const testPaginate = paginate(tests, currentPage, pageSize);

// Get current posts
// const indexOfLastTest = currentPage * pageSize;
// const indexOfFirstTest = indexOfLastTest - pageSize;
// const currentTests = search(tests).slice(indexOfFirstTest, indexOfLastTest);

//{
/* <Form inline>
        <Form.Control
          placeholder="Search for..."
          type="text"
          name="q"
          onChange={(e) => setQ(e.target.value)}
          value={q}
          className="mr-sm-2 ml-sm-5"
        ></Form.Control>
      </Form> */
//}

// const [q, setQ] = useState("");

// const [searchParam] = useState(["id", "name"]);
// const [pageSize, setPageSize] = useState(10);
// const [currentPage, SetCurrentPage] = useState(1);

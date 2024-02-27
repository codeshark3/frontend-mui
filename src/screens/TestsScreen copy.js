import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
import { listTests } from "../store/testSlice";

import Tests from "../components/Tests";
import Loader from "../components/Loader";
import Message from "../components/Message";
import SpreadSheet from "../components/SpreadSheet";
import SearchBox from "../components/SearchBox";
import Paginate from "../components/Paginate";
import { useNavigate } from "react-router-dom";
// import "../assets/css/index.css";

const TestsScreen = ({ history }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((store) => store.auth);
  const { userInfo } = userLogin;
  const testList = useSelector((store) => store.tests);
  const { error, loading, tests, page, pages } = testList;
  //   // console.log(tests);
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

  return (
    // <div>
    //   {loading ? (
    //     <Loader />
    //   ) : error ? (
    //     <Message variant="danger">{error}</Message>
    //   ) : (
    //     <div>
    //       <Card className="text-center">
    //         {/* <Card.Title>Tests</Card.Title> */}
    //         <Card.Body>
    //           <SearchBox />
    //           <Tests tests={tests} loading={loading} />
    //           <Paginate page={page} pages={pages} keyword={keyword} />
    //           <SpreadSheet tests={tests} />
    //         </Card.Body>
    //       </Card>
    //     </div>
    //   )}
    // </div>
    <></>
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

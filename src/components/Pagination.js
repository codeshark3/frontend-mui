import React from "react";
import { Pagination } from "react-bootstrap";
import _ from "lodash";
const Paginator = ({ testsCount, pageSize, currentPage, onPageChange }) => {
  // const { testsCount, pageSize } = props;

  const pagesCount = Math.ceil(testsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <Pagination className="pagination pagination-md">
      {/* <Pagination.First />
      <Pagination.Prev /> */}
      {pages.map((page) => (
        <Pagination.Item
          className={page === currentPage ? "page-item active" : "page-item"}
          key={page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Pagination.Item>
      ))}
      {/* 
      <Pagination.Next />
      <Pagination.Last /> */}
    </Pagination>
  );
};

export default Paginator;

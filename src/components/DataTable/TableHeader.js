import React from "react";

const TableHeader = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header.field}>{header.name}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

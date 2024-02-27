import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate} from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");

 const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword) {
      navigate(`/tests/?keyword=${keyword}&page=1`);
    } else {
      navigate(navigate.location.pathname);
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-primary" className="p-2">
        <i className="fa fa-search"></i>
      </Button>
    </Form>
  );
}

export default SearchBox;

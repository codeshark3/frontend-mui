import React, { useState,useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link, useLoaderData, useNavigate,} from "react-router-dom";

import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import {useSelector,useDispatch} from 'react-redux'
import {login} from '../store/authSlice'

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const userLogin = useSelector((store)=> store.auth)
const {loading,userInfo,error,isError}= userLogin


useEffect(() => {
 if(userInfo){
  navigate('/')
 }

  // return () => {
  //   second
  // }
}, [userInfo])

  const submitHandler = (e) => {
    // console.warn(password)
    e.preventDefault();
    dispatch(login(username, password));
    navigate('/',{replace:true})
  };

  return (
 <> 
    { error && <Message variant='danger' >Please enter username and password</Message>}
   
   <Card.Header >
    <Card.Title>
     <h2>Login</h2>
	 
    </Card.Title>
	 {error && <Message variant="danger">{error}</Message>}
      {/* {loading && <Loader />} */}
    </Card.Header>
   <Card.Body className="my-2 mx-2">
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email" style={{ paddingBottom: 30 }}>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password" style={{ paddingBottom: 30 }}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="on"
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="btn btn-block ">
          Sign In
        </Button>
      </Form>
    </FormContainer>
    </Card.Body>
    </>   
 );
};

export default LoginScreen;

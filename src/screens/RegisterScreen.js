import React, { useState, useEffect } from "react";


import { Form, Button, Card } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { Link, useLoaderData, useNavigate,} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { register } from "../store/registerSlice";
const RegisterScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword]= useState('')

  const [message, setMessage] = useState('')
  const userLogin = useSelector((store)=> store.auth)
  const {userInfo}= userLogin
  

  const userRegister = useSelector((store)=> store.register)
const {loading,newUser,error,messages}= userRegister

  useEffect(()=>{
    if(!userInfo){
      navigate('/login', {replace:true})
     }

     
    
  },[])
  const submitHandler = (e) => {

    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
  } else {
      dispatch(register(name,  password))
  }
   
  };
  return (
    <> <Card.Header>
    <Card.Title>
     <h2>Register new user</h2>
    </Card.Title>
    </Card.Header>
    {messages && <Message variant='success'>{messages}</Message>}
     {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {/* {loading && <Loader />} */}
   
   <Card.Body className="my-2 mx-2">
    <FormContainer>
      <Form onSubmit={submitHandler}>
      <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

           

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='passwordConfirm'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
       

        <Button type="submit" variant="primary" className="btn btn-block ">
        Register
        </Button>
      </Form>
    </FormContainer>
    </Card.Body>
    </>
  );
};

export default RegisterScreen;

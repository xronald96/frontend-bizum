import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import './login.css'
import { login } from '../../services/loginService'
import { useNavigate } from "react-router-dom";

import { updateCurrentUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
export const Login = () =>{

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const updateId = (id) => {
    dispatch(updateCurrentUser(id))
  }
  const onLogin = async (data)=> {
    const result = await login(data)
    if(result) {
      sessionStorage.setItem('token', result.token)
      updateId(result.id)
      navigate('/friends/'+result.id)
    }
  }
return <div className="center-div">
    <Form className="box-form" onSubmit={handleSubmit(onLogin)}>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" {...register("email")}/>
  <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" {...register("password")}/>
</Form.Group>
<div className="buttons">
<Button variant="link">Create account</Button>
<Button variant="dark" type="submit">
  Login
</Button>
</div>
</Form>
</div>

}

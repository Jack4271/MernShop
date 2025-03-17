import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import { Form, Button, Row, Col, } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from "../components/FormContainer";
import Loader from '../components/Loader'
import { useLoginMutation } from '../slices/usersApiSlice';


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('submit')
    }

  return (
    < FormContainer>
        <h1>Sign In</h1>

        <Form onSumbit={submitHandler}>
            <Form.Group controlId='email'>
                <Form.Label>Enter email</Form.Label>
                <Form.Control 
                    type='email'
                    placeholder='Enter email'
                    valve={email}
                    onClick={(e) => setEmail(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label> password</Form.Label>
                <Form.Control 
                    type='password'
                    placeholder='Enter password'
                    valve={password}
                    onClick={(e) => setPassword(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary' className='mt-2'>
                Sign In 
            </Button>

            <Row className='py-3'>
                <Col >
                    New Customer? <Link to='/register'>Register</Link>
                </Col>
            </Row>
        </Form>

    </FormContainer>
  )
}

export default LoginScreen
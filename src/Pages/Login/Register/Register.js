import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import facebook from '../../../Images/icons/facebook.png'
import google from '../../../Images/icons/google.png'
import github from '../../../Images/icons/github.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'

const Register = () => {

    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')



    const handleSubmitRegister = event => {
        event.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate('/home')
        console.log('some one is here', user);
    }

    const match = useMatch('/register')


    return (
        <div className='container mx-auto w-50 mt-5'>

            <div className='text-center mb-3'>
                <Link className={match ? 'btn btn-outline-secondary px-5 py-2 me-2' : 'btn btn-dark px-5 py-2 me-2'} to='/login'>LOGIN</Link>
                <Link className={match ? 'btn btn-dark px-5 py-2 me-2' : 'btn btn-outline-secondary'} to='/register'>REGISTER</Link>
            </div>
            <div className='text-center my-4'>
                <p className='text-center fw-normal mb-4'>Sign Up With:</p>
                <img className='me-4' style={{ height: '30px' }} src={google} alt="" />
                <img className='me-4' style={{ height: '30px' }} src={github} alt="" />
                <img style={{ height: '30px' }} src={facebook} alt="" />
            </div>
            <p className='text-center '>or:</p>
            <Form className='container' onSubmit={handleSubmitRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={nameRef} type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="my-3 d-flex justify-content-around" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Nabil Production Terms and Condition" />
                </Form.Group>
                <Button className='w-100 mx-auto mt-3' variant="dark" type="submit">
                    Register
                </Button>
                <p className="my-4 text-center ">Already a member? <Link className='text-decoration-none' to='/login'>LogIn</Link></p>

            </Form>
        </div>
    );
};

export default Register;
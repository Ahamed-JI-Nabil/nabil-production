import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useMatch, useNavigate, useRouteMatch } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const navigate = useNavigate()
    const match = useMatch('/login')


    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleSubmitLogin = event => {
        event.preventDefault()

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }


    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        console.log(error.message);
    }

    if (loading) {
        return <Loading></Loading>
    }





    return (
        <div className='container mx-auto w-50 mt-5'>

            <div className='text-center mb-3'>
                <Link className={match ? 'btn btn-dark px-5 py-2 me-2' : 'btn btn-outline-secondary'} to='/login'>LOGIN</Link>
                <Link className={match ? 'btn btn-outline-secondary px-5 py-2 me-2' : 'btn btn-dark px-5 py-2 me-2'} to='/register'>REGISTER</Link>
            </div>
            <SocialLogin></SocialLogin>
            <p className='text-center '>or:</p>
            <Form className='container' onSubmit={handleSubmitLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="my-3 d-flex justify-content-around" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    <Link className='text-decoration-none' to='/'>Forget Password?</Link>
                </Form.Group>
                <Button className='w-100 mx-auto mt-3' variant="dark" type="submit">
                    LogIn
                </Button>
                <p className="my-4 text-center ">Not a member? <Link className='text-decoration-none' to='/register'>Register</Link></p>

            </Form>
        </div>
    );
};

export default Login;
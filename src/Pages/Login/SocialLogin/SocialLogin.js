import React from 'react';
import facebook from '../../../Images/icons/facebook.png'
import google from '../../../Images/icons/google.png'
import github from '../../../Images/icons/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SocialLogin = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    const navigate = useNavigate()
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (googleUser || gitUser) {
        navigate(from, { replace: true });
    }

    if (googleError || gitError) {
        toast('Somthing went Horribly Wrong! Could Not create an Account. Please Try Again')
    }

    if (googleLoading || gitLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='text-center my-4'>
            <p className='text-center fw-normal mb-4'>Sign In With:</p>
            <img onClick={() => signInWithGoogle()} className='me-4' style={{ height: '30px', cursor: 'pointer' }} src={google} alt="" />
            <img onClick={() => signInWithGithub()} className='me-4' style={{ height: '30px', cursor: 'pointer' }} src={github} alt="" />
            <img style={{ height: '30px', cursor: 'pointer' }} src={facebook} alt="" />
            <ToastContainer />
        </div>
    );
};

export default SocialLogin;
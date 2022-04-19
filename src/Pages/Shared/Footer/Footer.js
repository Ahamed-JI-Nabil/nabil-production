import React from 'react';
import facebook from '../../../Images/icons/facebook.png'
import google from '../../../Images/icons/google.png'
import github from '../../../Images/icons/github.png'
import instagram from '../../../Images/icons/instagram.png'
import twitter from '../../../Images/icons/twitter.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white w-100">
            <div className="container p-4 pb-0 ">
                <section className="my-4">
                    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><img className='me-2' style={{ height: '30px', cursor: 'pointer' }} src={facebook} alt="" /></a>
                    <a href="http://google.com" target="_blank" rel="noopener noreferrer"><img className='me-2' style={{ height: '30px', cursor: 'pointer' }} src={google} alt="" /></a>
                    <a href="http://github.com" target="_blank" rel="noopener noreferrer"><img className='me-2' style={{ height: '30px', cursor: 'pointer' }} src={github} alt="" /></a>
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><img className='me-2' style={{ height: '30px', cursor: 'pointer' }} src={instagram} alt="" /></a>
                    <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><img style={{ height: '30px', cursor: 'pointer' }} src={twitter} alt="" /></a>
                </section>

            </div>



            <div className="text-center p-3">
                &copy; 2020 Copyright :
                <a className="text-white" href="https://nabilproduction.com"> nabilproduction.com</a>
            </div>

        </footer>
    );
};

export default Footer;
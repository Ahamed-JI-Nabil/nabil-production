import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-4 p-4'>
            <div>
                <h3>Difference between authorization and authentication.</h3>
                <p><span className='fw-bold'>Authentication:</span> Authentication is the process to verifying a user who they claim to be. Username and passwords are most common authentication process. It usually done before authorization .</p>
                <br />
                <p><span className='fw-bold'>Authorization:</span> Authorization determines what user can and cannot access to. Verifies whether access is allowed through policies and rules. It usually done after successfully authentication.</p>
                <br />
            </div>
            <div>
                <h3>Why are you using firebase?</h3>
                <p>Firebase is owned by tech giant google and it provide meany services like authentication, hosting, database, cloud storage and cloud messaging etc. Im using firebase in my website to authenticate user's and host my website. Firebase handle user authentication excellently and it reduce a lots of work of a web developer and makes it so much easier.  </p>
                <h3>What other options do you have to implement authentication?</h3>
                <ul>
                    <li>MongoDB</li>
                    <li>Passport</li>
                    <li>Okta</li>
                    <li>Backendless</li>
                    <li>Kumulos</li>
                    <li>Pubnub</li>
                </ul>
                <br />
            </div>
            <div>
                <h3>What other services does firebase provide other than authentication?</h3>
                <div className='d-flex mx-auto ms-5'>
                    <ul>
                        <h5>Development</h5>
                        <li>Realtime Database</li>
                        <li>Cloud Messaging</li>
                        <li>Storage</li>
                        <li>Hosting</li>
                        <li>Cloud Firestore</li>
                        <li>Remote Config</li>
                        <li>Test lab for android</li>
                        <li>Crash Reporting</li>
                    </ul>
                    <ul>
                        <h5>Grow And Earn</h5>
                        <li>Dynamic Links</li>
                        <li>Google Analytics</li>
                        <li>Predictions</li>
                        <li>In app Adds</li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
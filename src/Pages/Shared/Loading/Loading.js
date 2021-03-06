import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '400px' }} className='d-flex justify-content-center align-items-center w-100'>
            <Spinner animation="border" />
        </div>
    );
};

export default Loading;
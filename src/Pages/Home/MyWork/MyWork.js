import React from 'react';
import i1 from '../../../Images/extra/i1.jpg'
import i2 from '../../../Images/extra/i2.jpg'
import i3 from '../../../Images/extra/i3.jpg'
import i4 from '../../../Images/extra/i4.jpg'
import i5 from '../../../Images/extra/i5.jpeg'
import i6 from '../../../Images/extra/i6.jpeg'
import i7 from '../../../Images/extra/i7.jpeg'
import i8 from '../../../Images/extra/i8.jpeg'
import i10 from '../../../Images/extra/i10.jpeg'

const MyWork = () => {
    return (
        <div className='container my-5'>
            <h3 className=' text-center mx-auto my-5 border border-dark px-4 py-2 border-1 rounded-3 w-25'>Some Of My Work!</h3>
            <div className='row gy-3'>
                <img className='col-lg-4 col-sm-12' src={i1} alt="" />
                <img className='col-lg-4 col-sm-12' src={i2} alt="" />
                <img className='col-lg-4 col-sm-12' src={i3} alt="" />
                <img className='col-lg-4 col-sm-12' src={i4} alt="" />
                <img className='col-lg-4 col-sm-12' src={i5} alt="" />
                <img className='col-lg-4 col-sm-12' src={i6} alt="" />
                <img className='col-lg-4 col-sm-12' src={i7} alt="" />
                <img className='col-lg-4 col-sm-12' src={i8} alt="" />
                <img className='col-lg-4 col-sm-12' src={i10} alt="" />
            </div>
        </div>
    );
};

export default MyWork;
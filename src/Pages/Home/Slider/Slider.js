import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../Images/slider/img1.jpg'
import img2 from '../../../Images/slider/img2.jpg'
import img3 from '../../../Images/slider/img3.jpg'

const Slider = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Some Of Out Works</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Some Of Out Works</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Some Of Out Works</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;
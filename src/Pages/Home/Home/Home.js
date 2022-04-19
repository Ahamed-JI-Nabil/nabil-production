import React from 'react';
import MyWork from '../MyWork/MyWork';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <MyWork></MyWork>
        </div>
    );
};

export default Home;
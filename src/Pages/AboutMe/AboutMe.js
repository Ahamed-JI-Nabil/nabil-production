import React from 'react';
import me from '../../Images/me.png'

const AboutMe = () => {
    return (
        <div className=' container row d-lg-flex mx-auto my-5 px-5'>
            <div className='col-lg-6 col-sm-12'>
                <p>I'm Ahamed Johayir Iqbal Nabil. After completing my diploma in computer technology now I'm studying BSC in CSE at South East University. And I'm also learning Web Development with Jhankar Mahabub vaiya's Programming Hero course. I'm a humble student of Jhankar Mahabub vaiya and I'm so grateful to him for teaching me Web Development in such a beautiful way he made this journey way easier with his teaching skill and the way he explain topics to us is just amazing. I took this course because I want to be a Web Developer although lately, I lost track of the course because of some of my family issues and my university exam now I'm trying my best to achieve my goal. I'm also working hard so that I get selected for the programming hero SCIC program.

                </p>
            </div>
            <div className='col-lg-6 col-sm-12'>
                <img src={me} alt="" />
            </div>
        </div>
    );
};

export default AboutMe;
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {


    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    console.log(services);

    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>
                <h3 className=' text-center border border-dark px-4 py-2 border-1 rounded-3 w-25'>PHOTOGRAPHY</h3>
            </div>
            <div className='row justify-content-evenly'>
                {
                    services.slice(0, 3).map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <h3 className=' text-center border border-dark px-4 py-2 border-1 rounded-3 w-25'>CINEMATOGRAPHY</h3>
            </div>
            <div className='row justify-content-evenly'>
                {
                    services.slice(3, 6).map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
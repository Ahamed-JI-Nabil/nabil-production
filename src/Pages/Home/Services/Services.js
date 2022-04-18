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
            <div className='row justify-content-around'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
import React from 'react';
import { Card, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { service_title, service_price } = service

    return (
        <div className=' mt-5 col-lg-3 col-sm-12 row justify-content-center'>
            <Card className='w-75 '>
                <Card.Body className='text-center'>
                    <Card.Text>{service_title}</Card.Text>
                    <Card.Title>
                        {service_price}
                    </Card.Title>
                </Card.Body>
                <ListGroup className="text-center">
                    <ListGroupItem>{service.service1}</ListGroupItem>
                    <ListGroupItem>{service.service2}</ListGroupItem>
                    <ListGroupItem>{service.service3}</ListGroupItem>
                    <ListGroupItem>{service.service4}</ListGroupItem>
                    <ListGroupItem>{service.service5}</ListGroupItem>
                    <ListGroupItem>{service.service6}</ListGroupItem>
                </ListGroup>
                <Card.Body className='row'>
                    <Link to='/contact' className='btn btn-dark my-2 col align-self-end'>Contact Now</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;


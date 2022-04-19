import React from 'react';
import { Button, Card, ListGroup, ListGroupItem, } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {

    const { id, service_title, service_price } = service

    const navigate = useNavigate()


    const handleBooking = id =>{
        navigate('/checkout')
    }

    return (
        <div className=' mt-5 col-lg-3 col-sm-12 row justify-content-center'>
            <Card className='shadow'>
                <Card.Body className='text-center'>
                    <Card.Text>{service_title}</Card.Text>
                    <Card.Title>
                        {service_price}
                    </Card.Title>
                </Card.Body>
                <ListGroup className="text-center">
                    <ListGroupItem className='fw-light'>{service.service1}</ListGroupItem>
                    <ListGroupItem className='fw-light'>{service.service2}</ListGroupItem>
                    <ListGroupItem className='fw-light'>{service.service3}</ListGroupItem>
                    <ListGroupItem className='fw-light'>{service.service4}</ListGroupItem>
                    <ListGroupItem className='fw-light'>{service.service5}</ListGroupItem>
                    <ListGroupItem className='fw-light'>{service.service6}</ListGroupItem>
                </ListGroup>
                <Card.Body className='row'>
                    <Button  onClick={()=> handleBooking(id)}  className='btn btn-dark my-2 col align-self-end'>Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;


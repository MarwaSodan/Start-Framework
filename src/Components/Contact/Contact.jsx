import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaStar } from 'react-icons/fa';
import '../Contact/Contact.css';

export default function Contact() {
    return (
        <div className='contact-body'>
            <h2 className=' m-5 fw-bolder text-uppercase'>Contact Me</h2>
            <div className="icon mx-auto">
                <FaStar style={{ color: '#2C3E50', fontSize: '45px' }} />
            </div><div className="row d-flex justify-content-center ">
                <Form className='form'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type=" text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Control type="email" placeholder="Email address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Control type="number" placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" placeholder='Message' rows={3} />
                    </Form.Group>
                    <Button className='button'  type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

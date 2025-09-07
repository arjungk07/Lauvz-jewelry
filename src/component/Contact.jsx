
import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';

export default function Contact() {
    return (
        <section className="contact-block mt-4">
            <Container fluid>
                <div className='title-holder'>
                    <h2>Contact Us</h2>
                    <p style={{ textAlign: "center" }}>conect with us</p>
                </div>

                <Form className='contact-form'>
                    <Row>
                        <Col sm={4}>
                            <Form.Control type='text' placeholder="Enter your Full Name" required />
                        </Col>
                        <Col>
                            <Form.Control type='email' placeholder="Enter your Email address" required />
                        </Col>
                        <Col>
                            <Form.Control type='tel' placeholder="Enter your Contact Number" required />
                        </Col>
                    </Row>

                    <Col sm={12}>
                        <Form.Control as="textarea" placeholder="Enter your Message" />
                    </Col>
                    <div className='btn-holder mt-2'>
                        <Button type='submit'>Submit</Button>
                    </div>
                </Form>

            </Container>
         
            <div className='google-map'>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125766.19577316011!2d78.04042150095354!3d9.917826796702249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1756992588122!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <Container fluid >
                <div className='contact-info'>
                    <ul>
                        <li>arjun@email.com</li>
                        <li>00000 00000</li>
                        <li>Madurai Tamil Nadu</li>
                    </ul>
                </div>
            </Container>



        </section >
    );
}
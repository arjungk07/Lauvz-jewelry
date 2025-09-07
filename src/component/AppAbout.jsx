import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


import about from '../assets/image/about.jpg';


function AppAbout() {

  return (
    <section  className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={about} />
          </Col>
          <Col sm={6}>
            <div className="title-holder">
              <h2>About Us Info</h2>
              <p>Lav Jewelry is more than just a jewelry brand — it’s a celebration of elegance, craftsmanship, and individuality. Rooted in the rich cultural heritage of India and inspired by contemporary fashion, we create timeless pieces that resonate with every woman’s unique journey.</p>
              <Button variant="danger" size="lg" >
                Click Here to Contact Us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;
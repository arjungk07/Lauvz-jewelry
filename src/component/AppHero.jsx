

import Carousel from 'react-bootstrap/Carousel';
//images
import hero1 from '../assets/image/hero1.jpg';
import hero2 from '../assets/image/hero2.jpg';
import hero3 from '../assets/image/hero3.jpg';
import hero4 from '../assets/image/hero4.jpg';


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


var heroData = [
  {
    id: 1,
    image: hero1,
    title: 'Adorn Yourself with Artistry',
    description: 'Wear jewelry that’s a masterpiece—elegant, unique, and made to let your style shine.',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: hero2,
    title: 'Eternal Glow Necklace',
    description: 'A timeless piece that radiates elegance, this necklace captures the essence of grace with every delicate curve. Perfect for day or night, it adds a luminous touch to any outfit.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: hero3,
    title: 'Luxe Harmony Bracelet',
    description: 'A ring that captures light and attention, symbolizing confidence and brilliance in every gesture. Ideal for moments that deserve to shine.',
    link: 'https://www.twitter.com'
  }
]

var CardData = [
  {
    id: 1,
    image: hero1,
    title: 'Gold Jewelry',
    description: 'Wear jewelry that’s a masterpiece—elegant, unique, and made to let your style shine.',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: hero2,
    title: 'Gold Jewelry',
    description: 'Wear jewelry that’s a masterpiece—elegant, unique, and made to let your style shine.',
    link: 'https://www.google.com'
  },
  {
    id: 3,
    image: hero3,
    title: 'Gold Jewelry',
    description: 'Wear jewelry that’s a masterpiece—elegant, unique, and made to let your style shine.',
    link: 'https://www.google.com'
  },
  {
    id: 4,
    image: hero4,
    title: 'Gold Jewelry',
    description: 'Wear jewelry that’s a masterpiece—elegant, unique, and made to let your style shine.',
    link: 'https://www.google.com'
  }


];

function AppHero() {
  return (
    <section  className="hero-block">
      <Carousel>
        {
          heroData.map(hero => {
            return (
              <Carousel.Item key={hero.id}>
                <img
                  className="d-block w-100"
                  src={hero.image}
                  alt={"slide " + hero.id}
                />
                <Carousel.Caption>
                  <h2>{hero.title}</h2>
                  <p>{hero.description}</p>
                  <a className="btn btn-primary" href={hero.link}>Shop Now</a>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })
        }
      </Carousel>


      <Container className='mt-5'>
        <Row >
           <div className="title-holder">
          <h2>New Arrivals</h2>
        </div>
          {
            CardData.map(card=>{
              return(

                <Col key={card.id}>
            {/* Card  */}
            <Card style={{ width: '100%', backgroundColor:"white", padding:"15px" }} className='mb-3'>
              <Card.Img variant="top" src={card.image}/>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                 {card.description}
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
              );

            })
          }
        
        </Row>

      </Container>


    </section>
  );
}

export default AppHero;
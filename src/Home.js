import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './images/logo.png';
import award from './images/award.png';
import two from './images/2.png';
import three from './images/3.png';
import Footer from './Footer';
import './Home.css'; 

const Home = () => {
  return (
    <div className="gradient-background"> 
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} className="text-center">
            <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: '500px' }} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={4} className="d-flex align-items-center justify-content-center">
            <img src={award} alt="Award" className="img-fluid" style={{ maxHeight: '700px' }} />
          </Col>
          <Col lg={8}>
            <div className="text-left">
              <h5>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h5>
              <p>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</p>
              <p>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</p>
            </div>
            <img src={two} alt="Image Below Text" className="img-fluid float-lg-right" />
            <div className="text-left">
              <p>Government of India has awarded the <b>"National Energy Conservation Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
          </Col>
        </Row>
        <Container className="mt-4">
          <Row>
            <Col xs={12}>
              <p className="text-left" style={{ whiteSpace: 'nowrap' }}>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12}>
              <img src={three} alt="New Image" className="img-fluid" />
              <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            </Col>
          </Row>
        </Container>
        <div style={{ backgroundColor: 'red', height: '2px', width: '100%', marginTop: '20px' }}></div>
        <h5 className="mt-4">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
        <p>
          CHEMICALS & PROCESS <span style={{ color: 'red' }}>|</span> POWER <span style={{ color: 'red' }}>|</span> WATER & WASTE WATER <span style={{ color: 'red' }}>|</span> OILS & GAS <span style={{ color: 'red' }}>|</span> PHARMA <span style={{ color: 'red' }}>|</span> SUGARS & DISTILLERIES <span style={{ color: 'red' }}>|</span> PAPER & PULP <span style={{ color: 'red' }}>|</span> MARINE & DEFENCE <span style={{ color: 'red' }}>|</span> METAL & MINING <span style={{ color: 'red' }}>|</span> FOOD & BEVERAGE <span style={{ color: 'red' }}>|</span> PETROCHEMICAL & REFINERIES <span style={{ color: 'red' }}>|</span> SOLAR <span style={{ color: 'red' }}>|</span> BUILDING <span style={{ color: 'red' }}>|</span> HVAC <span style={{ color: 'red' }}>|</span> FIRE FIGHTING <span style={{ color: 'red' }}>|</span> AGRICULTURE & RESIDENTIAL
        </p>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Styles/footerStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp,faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <Container fluid className="footer-background no-padding-margin"style={{margin:0,padding:0}}>
      <Row>
        <hr></hr>
        <Col md={4} xs={12}style={{padding:"0",margin:"0"}}>
          <h5 className="footer-nav-title">Contact</h5>
          <br></br>
          <ul>
            <li className="contact-details">Address</li>
            <li className="contact-details">Name</li>
            <li className="contact-details">Mobile</li>
            <li className="contact-details">Email</li>
            <li className="contact-details">Social media Pages</li>
          </ul>
        </Col>
        <Col md={4} xs={12} style={{padding:"0",margin:"0"}}>
          <h5 className="footer-nav-title">Social Media</h5>
          <br/>
          <div style={{display:"flex",alignItems:"center",gap:10,padding:"0",margin:"0"}}>
              <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{color: "#63E6BE",}}/>
              <h6 className="social-text">Whatsapp</h6>
          </div>
          <br></br>
          <div style={{display:"flex",alignItems:"center",gap:10,padding:"0",margin:"0"}}>
              <FontAwesomeIcon icon={faInstagram} size="2x" style={{color: "#c46212",}} />
              <h6 className="social-text">Instagram</h6>
          </div>
          <br></br>
          <div style={{display:"flex",alignItems:"center",gap:10,padding:"0",margin:"0"}}>
              <FontAwesomeIcon icon={faFacebook} size="2x" style={{color: "#74C0FC",}} />
              <h6 className="social-text">Facebook</h6>
          </div>
          <br></br>
        </Col>
        <Col md={4} xs={12}style={{padding:"0",margin:"0"}}>
          <h5 className="footer-nav-title">Reach Us</h5>
          <br></br>
          <iframe
            width={"90%"}
            height={"250px"}
            title="location"
            style={{
              padding:"0",
              margin:"0",
              frameborder: "0",
              marginheight: "0",
              marginwidth: "0",
            }}
            src="https://maps.google.com/maps?width=500&amp;height=300&amp;hl=en&amp;q=coimbatore+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">Location</a>
          </iframe>
        </Col>
      </Row>
      <Row>
        <Col>
          <br></br>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="cright">
            &copy; 2024 AJ Crackers,Inc. All rights reserved
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

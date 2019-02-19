import React from 'react';
import { Col, Row } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                    <Row>
                        <div className="social">

                            <div className="icon"><SocialIcon bgColor="#ff5a01" fgColor="#FFFFFF" url="http://facebook.com"></SocialIcon></div>
                            <div className="icon"><SocialIcon bgColor="#ff5a01" fgColor="#FFFFFF" url="http://youtube.com"></SocialIcon></div>
                            <div className="icon"><SocialIcon bgColor="#ff5a01" fgColor="#FFFFFF" url="http://twitter.com"></SocialIcon></div>
                            <div className="icon"><SocialIcon bgColor="#ff5a01" fgColor="#FFFFFF" url="http://instagram.com"></SocialIcon></div>
                        </div>
                    </Row>
                    <Row>
                        <div className="footerMenu" >

                        
                            <a href="#">Warehouse </a>
                            <a href="#">Store </a>
                            <a href="#">Pack </a>
                        </div>
                    </Row>


                <Row>
                    <Col>
                        <div className="quote"><h1>"Some quote"</h1></div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="4"><div className="info"><p>Email: Halofullfilment@gmail.com</p></div></Col>
                    <Col xs="12" md="4"><div className="info"><p>Tel: 02-999-9999</p></div></Col>
                    <Col xs="12" md="4"><div className="info"><p>Address: Halo Service</p></div></Col>
                </Row>
            </div>
        );
    }
}

export default Footer;
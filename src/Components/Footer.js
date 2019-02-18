import React from 'react';
import { Col, Row } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <Row>
                    <Col xs={{ size: 1, offset: 4 }}>
                        <div className="icon"><SocialIcon url="http://facebook.com"></SocialIcon></div>
                    </Col>
                    <Col xs="1"> 
                        <div className="icon"><SocialIcon url="http://youtube.com"></SocialIcon></div>

                    </Col>
                    <Col xs="1">
                        <div className="icon"><SocialIcon url="http://twitter.com"></SocialIcon></div>
                    </Col>

                    <Col xs="1">
                        <div className="icon"><SocialIcon url="http://instagram.com"></SocialIcon></div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="quote"><h1>"Some quote"</h1></div>
                    </Col>
                </Row>
                <Row>
                    <Col><div className="info"><p>Email: Halofullfilment@gmail.com</p></div></Col>
                    <Col><div className="info"><p>Tel: 02-999-9999</p></div></Col>
                    <Col><div className="info"><p>Address: Halo Service</p></div></Col>
                </Row>
            </div>
        );
    }
}

export default Footer;
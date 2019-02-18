import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Content1.css';

class Content1 extends React.Component{
    render() {
        return(
            <Container className="container">
                <Row size="10em">
                    <Col md="6"  >
                        <div className="img">
                            <img src="http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Car-icon.png">
                            </img>
                        </div>
                       
                    </Col>
                    <Col md="6"className="content">
                        <div>
                            <h1> Halo </h1>
                            <h6> Fullfilment Service </h6>
                        </div>
                        <div>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Content1;
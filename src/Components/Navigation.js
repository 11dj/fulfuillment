import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import './Navigation.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return(
            <Container className="container">
                <div className="drop">
                    <Row>
                        <Col><div className="logo">
                                <img src="https://github.com/bkioshn/fulfuillment/blob/master/pic/S__1835016.jpg?raw=true" />
                            </div></Col>
                        <Col className="dropCol">
                            <Dropdown direction="left" 
                            isOpen={this.state.dropdownOpen} 
                            toggle={this.toggle}>
                                <DropdownToggle color="warning" caret> </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Warehouse</DropdownItem>
                                    <DropdownItem>Store</DropdownItem>
                                    <DropdownItem>Pack</DropdownItem>
                                    <DropdownItem>Contact</DropdownItem>
                                    <DropdownItem>About</DropdownItem>
                                    <DropdownItem>FAQ</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>

                <div className="navi">
                    <Row>
                        <Col>
                            <div className="orangeTop"></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col><div className="colNav"><p>Warehouse</p></div></Col>
                        <Col><div className="colNav"><p>Store</p></div></Col>
                        <Col><div className="colNav"><p>Pack</p></div></Col>
                        <Col md="3">
                            <div className="logo">
                                <img src="https://github.com/bkioshn/fulfuillment/blob/master/pic/S__1835016.jpg?raw=true" />
                            </div>
                        </Col>
                        <Col><div className="colNav"><p>Contact</p></div></Col>
                        <Col><div className="colNav"><p>About</p></div></Col>
                        <Col><div className="colNav"><p>FAQ</p></div></Col>
                    </Row>
                </div>


                    
                    
            </Container>
        );
    }
}

export default Navigation;

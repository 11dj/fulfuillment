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
                        <Col>Halo</Col>
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
                        <Col className="colNav">Warehouse</Col>
                        <Col className="colNav">Store</Col>
                        <Col className="colNav">Pack</Col>
                        <Col className="colNav" md="3">
                            <img src="" />
                        </Col>
                        <Col className="colNav">Contact</Col>
                        <Col className="colNav">About</Col>
                        <Col className="colNav">FAQ</Col>
                    </Row>
                </div>


                    
                    
            </Container>
        );
    }
}

export default Navigation;

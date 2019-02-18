

import React from 'react';
import { Col, Row } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import './ServiceContent.css';
import CardService from './CardService';

class ServiceContent extends React.Component {
    constructor() {
        super();
        this.state = {
            header: ["Service", "Pack", "Ship"],
            pic: ["https://www.shareicon.net/data/256x256/2016/09/02/824673_storage_512x512.png",
                "https://www.shareicon.net/data/256x256/2016/09/02/824673_storage_512x512.png",
                "https://www.shareicon.net/data/256x256/2016/09/02/824673_storage_512x512.png"],
            body: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"]
        }
    }

    render() {
        return(
            <div className="serviceContent">
                <Row>
                    <Col md={{ size: 6,  offset: 1 }}>
                        <div className="serText">
                            <h1>Our Services</h1>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col nd="12"lg="4" style={{marginBottom:"1em"}}> 

                        <div className="wrapCard">
                            <CardService header = {this.state.header[0]} pic = {this.state.pic[0]} body = {this.state.body[0]} /> 
                        </div>
                    </Col>
                    <Col md="12" lg="4" style={{marginBottom:"1em"}}> 
                        <div className="wrapCard">
                            <CardService header = {this.state.header[1]} pic = {this.state.pic[1]} body = {this.state.body[1]} /> 
                        </div>
                    </Col>
                    <Col nd="12" lg="4" style={{marginBottom:"1em"}}> 
                        <div className="wrapCard">
                            <CardService header = {this.state.header[2]} pic = {this.state.pic[2]} body = {this.state.body[2]} /> 
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ServiceContent;
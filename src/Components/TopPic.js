import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './TopPic.css';


class TopPic extends React.Component{
    render() {
        return(
            <div className="topPic">
                <div className="image">
                    <div className="image2"> 
                        <img src="https://www.spacecentrestorage.com/assets/uploads/General/SCS-Slide02-Commercial.jpg">
                        </img>
                    </div>
                </div>
                
                <div className="oBG">
                    <div className="orangeBG"></div>
                </div>
            </div>
        );
    }
}

export default TopPic;


/*
 <Row>

                    <Col lg={{ size: 10, offset: 0 }} xs="12" > 
                        <div className="image">
                            <img src="https://www.spacecentrestorage.com/assets/uploads/General/SCS-Slide02-Commercial.jpg">
                            </img>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="orangeBG">

                        </div>
                    </Col>
                </Row>
*/
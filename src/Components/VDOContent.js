import React from 'react';
import {Row, Col} from 'reactstrap';
import './VDOContent.css';

class VDOContent extends React.Component {
    render() {
        return(
            <div className="vdoContent">
                <Row>
                    <Col className="vdoCol" lg="3" style={{ paddingLeft: "0", paddingRight: "0" }}>
                        <div className="orangeBox">
                            <img src="https://www.syncron.com/wp-content/uploads/2017/06/sync-orange-bg.jpg"></img>
                        </div>
                    </Col>
                    <Col lg="6" style={{ paddingLeft: "0", paddingRight: "0"}}>
                        <div className="vdo">
                            <iframe width="100%"
                                src="https://www.youtube.com/embed/zk85Zdx4siQ">
                            </iframe>
                        </div>
                        
                    </Col>
                    <Col className="vdoCol" lg="3" style={{ paddingLeft: "0", paddingRight: "0" }}>
                        <div className="orangeBox">
                            <img src="https://www.syncron.com/wp-content/uploads/2017/06/sync-orange-bg.jpg"></img>
                        </div>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default VDOContent;
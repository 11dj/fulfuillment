import React from 'react'; 
import {Row, Container, Col} from 'reactstrap';
import './Circle.css';

class Circle extends React.Component {
    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col><div className="circle">sfwefkf</div></Col>
                        <Col><div className="circle"></div></Col>
                        <Col><div className="circle"></div></Col>
                        <Col><div className="circle"></div></Col>
                    </Row>
                </Container>           
            </div>
        );
    }
}

export default Circle;
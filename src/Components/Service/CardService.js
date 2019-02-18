import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import './ServiceContent.css';



function CardService(props) {
    return(
        <Card className="serviceCard">
                <CardBody>
                    <CardTitle>{props.header}</CardTitle>
                </CardBody>
                <div>
                    <img src={props.pic}/>
                </div>
                <CardBody>
                    <CardText className="serviceText">
                       {props.body}
                    </CardText>
                </CardBody>
                <Button>More Infomation</Button>
            </Card>
    );
}
export default CardService;
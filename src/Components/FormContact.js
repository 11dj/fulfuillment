import React from 'react';
import './FormContact.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

class FormContact extends React.Component {
    constructor() {
        super();
        this.state = {
            name:"",
            email:"",
            text:""
        }
    }

    handleSubmit = (e) => {
        console.log(this.state.name, this.state.email);

    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <div className="contact">
                <div className="text"> <h1>Contact</h1> </div>
                <div className="fm">
                    <Container>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label sm={2}> Name</Label>
                                <Col sm={10}>
                                    <Input type="text" id="name" name="name"value={this.state.name} 
                                        onChange={this.handleChange}
                                        placeholder="Name" 
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleEmail" sm={2}>Email</Label>
                                <Col sm={10}>
                                    <Input type="email" name="email" id="email" value={this.state.email} 
                                        onChange={this.handleChange}
                                        placeholder="Email" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleText" sm={2}>Text Area</Label>
                                <Col sm={10}>
                                    <Input type="textarea" name="text" id="text" value={this.state.text} 
                                        onChange={this.handleChange}
                                        placeholder="Message"/>
                                </Col>
                            </FormGroup>
                            <div className="button"> 
                                <Button className="btn" color="warning">Submit</Button>
                            </div>
                        </Form>
                    </Container>
                </div>
            </div>
        );
    }
}

export default FormContact;
/*
            <div className="contact">
                <Row>
                    <Col><h1>Contact</h1></Col>
                </Row>
                <form>
                    <Row>
                        <Col>
                            <label>Name: </label> 
                            <input type="text" className="input" placeholder="Enter your name"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Email: </label> 
                            <input type="text" className="input" placeholder="Enter your name"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Message: </label> 
                            <textarea className="input2" rows="4" cols="90" placeholder="Enter your name"></textarea>
                        </Col>
                    </Row>
                    <div className="button">
                        <Button color="warning">Submit</Button>
                    </div>

                </form>
 
            </div>
            */


            //https://stackblitz.com/edit/reactstrap-v5-beta-starter-y68hte?file=index.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export default class Register extends React.Component {
  
    render() {
        const { login } = this.props;
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={4}></Col>
                        <Col sm={4}>
                            <div>
                                <h1 style={{marginTop:'150px',textAlign:'center'}}>Sign Up</h1>
                            </div>
                            <br/>
                            <Form>
                                <Form.Group controlId="formBasicName">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Your Name"
                                        name="username"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Password"
                                        name="password"
                                    />
                                </Form.Group>
                            </Form>
                            <Button style={{width:'100%'}} variant="success" type="submit">Register</Button>
                            <br/><br/>
                            <Button onClick={login} style={{width:'100%'}} variant="dark" type="submit">Back To Login</Button>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export default class Login extends React.Component{
    render(){
        const { register , dashboard } = this.props;
        return(
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={4}></Col>
                        <Col sm={4}>
                            <h1 style={{marginTop:'150px',textAlign:'center'}}>Login</h1>
                            <br/>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"    
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                    />
                                </Form.Group>
                            </Form>
                            <Button onClick={dashboard} style={{width:'100%',fontSize:'20px'}} variant="success" type="submit">Login</Button>
                            <br/>
                            <br/>
                            <Button onClick={register} style={{width:'100%',fontSize:'20px'}} variant="danger" type="submit">Signup</Button>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
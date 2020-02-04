import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';
import firebase from '../Config/Firebase';


export default class Register extends React.Component {

    state = {
        username: null,
        email: null,
        password: null,
    }

    userRegister = () => {
        const { username, email, password } = this.state;
        const { dashboard } = this.props;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                //userCreated
                // swal("user registered successfully");
                // dashboard();
            })
            .catch((error) => {
                // Handle Errors here.

                var errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    handleTextFields = (event) => {
        this.setState({
            [event.target.name]: event.target.value, 
        })

    }
  
    render() {
        // const { dashboard } = this.props;
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
                                        onChange={this.handleTextFields}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        onChange={this.handleTextFields}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter Password"
                                        name="password"
                                        onChange={this.handleTextFields}
                                    />
                                </Form.Group>
                            </Form>
                            <Button onClick={this.userRegister} style={{width:'100%'}} variant="success" type="submit">Register</Button>
                            <br/><br/>
                            <Button onClick={login} style={{width:'100%'}} variant="dark" type="submit">Back To Login</Button>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
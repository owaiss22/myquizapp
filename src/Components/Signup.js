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
                swal("user registered successfully");
                
                const userID = firebase.auth().currentUser.uid;
                const dbRef = firebase.database().ref().child("Users").child(userID);
                dbRef.set({
                    Full_Name: username,
                    Email: email,
                    Courses: ['HTML', 'CSS', 'JavaScript',
                    ],
                    // Courses_List:{
                    //     Joined_Courses: [  
                    //         'You may not joined for any course'
                    //     ],
                    // },
                    Quiz_List: {
                        HTML:{
                            Quiz:['Quiz1', 'Quiz2', 'Quiz3'],
                            Quiz1: {
                                Title: 'Quiz1',
                                Status: 'Not-Attempted',
                                Duration: 30,
                                Total_Questions: 3,
                                Passing_Marks: 50,
                                Questions: [
                                    {
                                        Title: "What is JavaScript",
                                        Options: ["Natural Language", "Scripting Language", "FrameWork", "None of these"],
                                        Correct: 2
                                    },
                                    {
                                        Title: "HTML Stands for",
                                        Options: ["Hyper text markup language", "Language", "FrameWork", "None of these"],
                                        Correct: 1
                                    },
                                    {
                                        Title: "Inside which HTML element do we put the JavaScript?",
                                        Options: ["<script>", "JS", "Scripting", "Javascritp"],
                                        Correct: 1
                                    }
                                ],
                                Result:{
                                    score: 0,
                                    correct_ques: 0,                                        

                                }
                            },
                            Quiz2: {
                                Title: 'Quiz2',
                                Status: 'Not-Attempted',
                                Duration: 30,
                                Total_Questions: 3,
                                Passing_Marks: 50,
                                Questions: [
                                    {
                                        Title: "What is JavaScript",
                                        Options: ["Natural Language", "Scripting Language", "FrameWork", "None of these"],
                                        Correct: 2
                                    },
                                    {
                                        Title: "HTML Stands for",
                                        Options: ["Hyper text markup language", "Language", "FrameWork", "None of these"],
                                        Correct: 1
                                    },
                                    {
                                        Title: "Inside which HTML element do we put the JavaScript?",
                                        Options: ["<script>", "JS", "Scripting", "Javascritp"],
                                        Correct: 1
                                    }
                                ],
                                Result:{
                                    score: 0,
                                    correct_ques: 0,                                        

                                }
                            },
                            Quiz3: {
                                Title: 'Quiz3',
                                Status: 'Not-Attempted',
                                Duration: 30,
                                Total_Questions: 3,
                                Passing_Marks: 50,
                                Questions: [
                                    {
                                        Title: "What is JavaScript",
                                        Options: ["Natural Language", "Scripting Language", "FrameWork", "None of these"],
                                        Correct: 2
                                    },
                                    {
                                        Title: "HTML Stands for",
                                        Options: ["Hyper text markup language", "Language", "FrameWork", "None of these"],
                                        Correct: 1
                                    },
                                    {
                                        Title: "Inside which HTML element do we put the JavaScript?",
                                        Options: ["<script>", "JS", "Scripting", "Javascritp"],
                                        Correct: 1
                                    }
                                ],
                                Result:{
                                    score: 0,
                                    correct_ques: 0,                                        

                                }
                            }
                        },
                        CSS:{
                            Quiz:['Quiz1', 'Quiz2', 'Quiz3'],
                            Quiz1: {
                                Title: 'Quiz1',
                                Status: 'Not-Attempted',
                                Duration: 30,
                                Total_Questions: 3,
                                Passing_Marks: 50,
                                Questions: [
                                    {
                                        Title: "What is JavaScript",
                                        Options: ["Natural Language", "Scripting Language", "FrameWork", "None of these"],
                                        Correct: 2
                                    },
                                    {
                                        Title: "HTML Stands for",
                                        Options: ["Hyper text markup language", "Language", "FrameWork", "None of these"],
                                        Correct: 1
                                    },
                                    {
                                        Title: "Inside which HTML element do we put the JavaScript?",
                                        Options: ["<script>", "JS", "Scripting", "Javascritp"],
                                        Correct: 1
                                    }
                                ],
                                Result:{
                                    score: 0,
                                    correct_ques: 0,                                        

                                }
                            },
                            Quiz2: {
                                Title: 'Quiz2',
                                Status: 'Not-Attempted',
                                Duration: 30,
                                Total_Questions: 3,
                                Passing_Marks: 50,
                                Questions: [
                                    {
                                        Title: "What is JavaScript",
                                        Options: ["Natural Language", "Scripting Language", "FrameWork", "None of these"],
                                        Correct: 2
                                    },
                                    {
                                        Title: "HTML Stands for",
                                        Options: ["Hyper text markup language", "Language", "FrameWork", "None of these"],
                                        Correct: 1
                                    },
                                    {
                                        Title: "Inside which HTML element do we put the JavaScript?",
                                        Options: ["<script>", "JS", "Scripting", "Javascritp"],
                                        Correct: 1
                                    }
                                ],
                                Result:{
                                    score: 0,
                                    correct_ques: 0,                                        

                                }
                            },
                            Quiz3: {
                                Title: 'Quiz3',
                                Status: 'Not-Attempted',
                                Duration: 30,
                                Total_Questions: 3,
                                Passing_Marks: 50,
                                Questions: [
                                    {
                                        Title: "What is JavaScript",
                                        Options: ["Natural Language", "Scripting Language", "FrameWork", "None of these"],
                                        Correct: 2
                                    },
                                    {
                                        Title: "HTML Stands for",
                                        Options: ["Hyper text markup language", "Language", "FrameWork", "None of these"],
                                        Correct: 1
                                    },
                                    {
                                        Title: "Inside which HTML element do we put the JavaScript?",
                                        Options: ["<script>", "JS", "Scripting", "Javascritp"],
                                        Correct: 1
                                    }
                                ],
                                Result:{
                                    score: 0,
                                    correct_ques: 0,                                        

                                }
                            }
                        },
                        JavaScript:{
                            Quiz:['Quiz1', 'Quiz2', 'Quiz3'],
                            Quiz1: {
                                Title: 'Quiz1',
                                Status: 'Not-Attempted',
                                Duration: 30,
                                Total_Questions: 3,
                                Passing_Marks: 50,
                                Questions: [
                                    {
                                        Title: "What is JavaScript",
                                        Options: ["Natural Language", "Scripting Language", "FrameWork", "None of these"],
                                        Correct: 2
                                    },
                                    {
                                        Title: "HTML Stands for",
                                        Options: ["Hyper text markup language", "Language", "FrameWork", "None of these"],
                                        Correct: 1
                                    },
                                    {
                                        Title: "Inside which HTML element do we put the JavaScript?",
                                        Options: ["<script>", "JS", "Scripting", "Javascritp"],
                                        Correct: 1
                                    }
                                ],
                                Result:{
                                    score: 0,
                                    correct_ques: 0,                                        

                                }
                            },
                            Quiz2: {
                                Title: 'Quiz2',
                                Status: 'Not-Attempted',
                                Duration: 30,
                                Total_Questions: 3,
                                Passing_Marks: 50,
                                Questions: [
                                    {
                                        Title: "What is JavaScript",
                                        Options: ["Natural Language", "Scripting Language", "FrameWork", "None of these"],
                                        Correct: 2
                                    },
                                    {
                                        Title: "HTML Stands for",
                                        Options: ["Hyper text markup language", "Language", "FrameWork", "None of these"],
                                        Correct: 1
                                    },
                                    {
                                        Title: "Inside which HTML element do we put the JavaScript?",
                                        Options: ["<script>", "JS", "Scripting", "Javascritp"],
                                        Correct: 1
                                    }
                                ],
                                Result:{
                                    score: 0,
                                    correct_ques: 0,                                        

                                }
                            },
                            Quiz3: {
                                Title: 'Quiz3',
                                Status: 'Not-Attempted',
                                Duration: 30,
                                Total_Questions: 3,
                                Passing_Marks: 50,
                                Questions: [
                                    {
                                        Title: "What is JavaScript",
                                        Options: ["Natural Language", "Scripting Language", "FrameWork", "None of these"],
                                        Correct: 2
                                    },
                                    {
                                        Title: "HTML Stands for",
                                        Options: ["Hyper text markup language", "Language", "FrameWork", "None of these"],
                                        Correct: 1
                                    },
                                    {
                                        Title: "Inside which HTML element do we put the JavaScript?",
                                        Options: ["<script>", "JS", "Scripting", "Javascritp"],
                                        Correct: 1
                                    }
                                ],
                                Result:{
                                    score: 0,
                                    correct_ques: 0,                                        

                                }
                            }
                        }
                    }
               
                
            })
            dashboard();
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
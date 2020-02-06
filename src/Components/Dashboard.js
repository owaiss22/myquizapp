import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import firebase from '../Config/Firebase';
import swal from 'sweetalert';



export default class Dash extends React.Component {

    state = {
        showQuizScreen: false,
        CoursesArr: [],
        // selectedCourses: [],
        HTMLQuizListArr: [],
    }

    componentDidMount(){
        const { userID } = this.props;
        

        const dbref = firebase.database().ref().child("Users").child(userID);
        dbref.on('value', val => {
            this.setState({
                // selectedCourses: val.val().Courses_List.selectedCourses,
               
                CoursesArr: val.val().Courses,
                HTMLQuizListArr: val.val().Quiz_List.HTML,
                showQuizScreen: false,
            })
            console.log(val.val().Courses)
            console.log(val.val().Quiz_List.HTML)
        })
    }

    // selectedCourse = (course) => {
    //     const { userID } = this.props;
    //     const { selectedCourses } = this.state;

    //     const dbRef = firebase.database().ref().child("Users").child(userID).child("Courses_List");
    //     dbRef.set({
    //             selectedCourses
    //     }).then(() => {
    //             swal("Successful");
    //         }).catch((error) => {
    //             var errorMessage = error.message;
    //             swal(`Error: ${errorMessage}`);
    //         });
    //         if (course === 'HTML') {
    //             document.getElementById("HTML").disabled = true;
    //         }
    //         else if (course === 'CSS') {
    //             document.getElementById("CSS").disabled = true;
    //         }
    //         else if (course === 'JavaScript') {
    //             document.getElementById("JavaScript").disabled = true;
    //         }
        
    // }

    // renderQuiz = (course) => {
    //     const { QuizScreen } = this.props;
    //     this.setState({
    //         showQuizScreen: true,
    //     });
    //     QuizScreen(course);
    // }
    


    render() {
        const { quiz , logout ,  userEmail } = this.props;
        const { CoursesArr , selectedCourses } = this.state;
        return (
            
            <React.Fragment>
                
                <Container>
                        <h1 style={{textAlign:'center', marginTop:'50px'}}>Dashboard</h1>
                        <Button onClick={logout} style={{float:'right'}} variant="danger" type="submit">Logout</Button>

                    <Row>
                        <Col sm={4}>
                            <Card bg="dark" text="white" style={{ width: '18rem',marginTop:'120px' }}>
                                <Card.Header>Quiz</Card.Header>
                                <Card.Body style={{backgroundColor:'white'}}>
        <Card.Title style={{color:'black'}}> {userEmail} </Card.Title>
                                    <Card.Text>
                                        <Button  style={{width:'100%'}} variant="dark">HTML</Button>
                                        <br /><br />
                                        <Button style={{width:'100%'}} variant="dark">CSS</Button>
                                        <br /><br />
                                        <Button style={{width:'100%'}} variant="dark">JAVASCRIPT</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <Card  style={{ width: '18rem',marginTop:'120px',marginLeft:'100px',border:'none' }}>
                                <Card.Text>
                                    Welcome to Quiz<br/>
                                    5 Questions<br/>
                                    Time: 1 min<br/><br/>
                                    <Button onClick={quiz} style={{width:'50%'}} variant="success">Start Quiz</Button>
                                </Card.Text>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </React.Fragment>
        )
    }
}
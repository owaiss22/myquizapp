import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



export default class Dash extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                        <h1 style={{textAlign:'center', marginTop:'50px'}}>Dashboard</h1>

                    <Row>
                        <Col sm={4}>
                            <Card bg="dark" text="white" style={{ width: '18rem',marginTop:'120px' }}>
                                <Card.Header>Quiz</Card.Header>
                                <Card.Body style={{backgroundColor:'white'}}>
                                    <Card.Title style={{color:'black'}}>Web Dev Quiz</Card.Title>
                                    <Card.Text>
                                        <Button style={{width:'100%'}} variant="dark">HTML</Button>
                                        <br /><br />
                                        <Button style={{width:'100%'}} variant="dark">CSS</Button>
                                        <br /><br />
                                        <Button style={{width:'100%'}} variant="dark">JAVASCRIPT</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card  style={{ width: '18rem',marginTop:'120px',border:'none' }}>
                                <Card.Text>
                                    Welcome to Quiz<br/>
                                    5 Questions<br/>
                                    Time: 1 min<br/><br/>
                                    <Button style={{width:'50%'}} variant="success">Start Quiz</Button>
                                </Card.Text>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </React.Fragment>
        )
    }
}
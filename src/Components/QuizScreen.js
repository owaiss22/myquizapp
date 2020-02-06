import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

export default class QuizScreen extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Quiz Screen</h1>

                <Card style={{ width: '18rem', margin: '50px', border: 'none' }}>
                    <Card.Title >Question 1</Card.Title>
                    <Card.Text>
                        Html stands for:
                        <Form.Check
                            type="radio"
                            label=" Hyper Text Markup Language"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check
                            type="radio"
                            label=" Hyper Transform Markup Language"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />
                        <Form.Check
                            type="radio"
                            label=" Hyper Text Makeup Language "
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                        />
                        {/* <form>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option1" checked={true} />
                                    Hyper Text Markup Language
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option2" />
                                    Hyper Transform Markup Language 
                                 </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option3" />
                                    Hyper Text Makeup Language 
                                </label>
                            </div>
                        </form> */}
                        <br />
                        <Button style={{ width: '50%' }} variant="success">Next</Button>
                    </Card.Text>
                </Card>

            </React.Fragment>
        )
    }
}
import React from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Register from './Components/Signup';
import Dashboard from './Components/Dashboard';
import QuizScreen from './Components/QuizScreen';
import firebase from './Config/Firebase';
import swal from 'sweetalert';

class App extends React.Component{
  state = {
    showLogin: true,
    showRegister: false,
    showDashboard: false,
    showQuizScreen: false,
    usr: null,
    usrEmail: null,
    Course: null,
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) =>{
      let uId = "null";
      let uEmail = "null";
      if(user){
        uId = firebase.auth().currentUser.uid;
        uEmail = firebase.auth().currentUser.email;
        console.log(uEmail);
        this.setState({
          usrEmail: uEmail,
          usr: uId,
          showQuizScreen: false,
        });
        this.renderDashboard();

      } else{
        this.setState({
          showLogin: true,
          showQuizScreen: false,
        })
      }
    })

  }

  logout = () => {
    this.setState({
      usr: null,
      showLogin: true,
      showDashboard: false,
      showQuizScreen: false,
      showRegister: false,
    })
    firebase.auth().signOut()
    .then(function(){
      swal("User logout successfully");
    })
    .catch(function(error){
      swal("Something went wrong");
    })
  }

  renderLogin = () => {
    this.setState({
      showLogin: true,
      showRegister: false,
      showDashboard: false,
      showQuizScreen: false,
    })
  }

  renderRegister = () => {
    this.setState({
      showRegister: true,
      showLogin: false,
      showDashboard: false,
      showQuizScreen: false,
    })
  }

  renderDashboard = () => {
    this.setState({
      showDashboard: true,
      showRegister: false,
      showLogin: false,
      showQuizScreen: false,
    })
  }

  renderQuizScreen = () => {
    this.setState({
      showQuizScreen: true,
      showDashboard: false,
      showRegister: false,
      showLogin: false,
    })
  }

  QuizScreen = (course) => {
    this.setState({
      showRegister: false,
      showLogin: false,
      showDashboard: false,
      showQuizScreen: true,
      Course: course,
    });
  }

  render(){
    const { showLogin , showRegister , showDashboard , showQuizScreen , usr , usrEmail , Course } = this.state;
    return(
      <React.Fragment>
        {
          showLogin && <Login  register={this.renderRegister} dashboard={this.renderDashboard}/>
        }
        {
          showRegister && <Register login={this.renderLogin} dashboard={this.renderDashboard}/>
        }
        {
          showDashboard && <Dashboard QuizScreen={this.QuizScreen} userID={usr} userEmail={usrEmail} quiz={this.renderQuizScreen} logout={this.logout}/>
        }
        {
          showQuizScreen && <QuizScreen userID={usr} course={Course}/>
        }
      </React.Fragment>
    )
  }
}

export default App;

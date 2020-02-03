import React from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Register from './Components/Signup';
import Dashboard from './Components/Dashboard';
import QuizScreen from './Components/QuizScreen';

class App extends React.Component{
  state = {
    showLogin: true,
    showRegister: false,
    showDashboard: false,
    showQuizScreen: false,
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

  render(){
    const { showLogin , showRegister , showDashboard , showQuizScreen } = this.state;
    return(
      <React.Fragment>
        {
          showLogin && <Login  register={this.renderRegister} dashboard={this.renderDashboard}/>
        }
        {
          showRegister && <Register login={this.renderLogin}/>
        }
        {
          showDashboard && <Dashboard quiz={this.renderQuizScreen}/>
        }
        {
          showQuizScreen && <QuizScreen/>
        }
      </React.Fragment>
    )
  }
}

export default App;

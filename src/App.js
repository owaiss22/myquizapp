import React from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Register from './Components/Signup';
import Dashboard from './Components/Dashboard';

class App extends React.Component{
  state = {
    showLogin: true,
    showRegister: false,
    showDashboard: false,
  }

  renderLogin = () => {
    this.setState({
      showLogin: true,
      showRegister: false,
      showDashboard: false,
    })
  }

  renderRegister = () => {
    this.setState({
      showRegister: true,
      showLogin: false,
      showDashboard: false,
    })
  }

  renderDashboard = () => {
    this.setState({
      showDashboard: true,
      showRegister: false,
      showLogin: false,
    })
  }

  render(){
    const { showLogin , showRegister , showDashboard } = this.state;
    return(
      <React.Fragment>
        {
          showLogin && <Login  register={this.renderRegister} dashboard={this.renderDashboard}/>
        }
        {
          showRegister && <Register login={this.renderLogin}/>
        }
        {
          showDashboard && <Dashboard/>
        }
      </React.Fragment>
    )
  }
}

export default App;

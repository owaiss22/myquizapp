import React from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Register from './Components/Signup';

class App extends React.Component{
  state = {
    showLogin: true,
    showRegister: false,
  }

  renderLogin = () => {
    this.setState({
      showLogin: true,
      showRegister: false,
    })
  }

  renderRegister = () => {
    this.setState({
      showRegister: true,
      showLogin: false,
    })
  }

  render(){
    const { showLogin , showRegister } = this.state;
    return(
      <React.Fragment>
        {
          showLogin && <Login  register={this.renderRegister}/>
        }
        {
          showRegister && <Register login={this.renderLogin}/>
        }
      </React.Fragment>
    )
  }
}

export default App;

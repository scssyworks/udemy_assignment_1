import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Sachin'
    };
  }

  changeUsername = (e) => {
    const username = e.target.value;
    this.setState({
      username
    });
  }

  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <UserOutput username={username} />
        <UserOutput />
        <UserInput onChange={this.changeUsername} value={username} />
      </div>
    );
  }
}

export default App;

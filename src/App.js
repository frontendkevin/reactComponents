import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Switch from './components/Switch'
import SelectStaff from './components/SelectStaff'

class App extends Component {
  constructor(){
    super()
    
  }
  handleSwitchChange(bol){
    console.log(bol)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Switch name="haha" handleSwitchChange={this.handleSwitchChange.bind(this)}/> 
          <SelectStaff/>
        </div>
      </div>
    );
  }
}

export default App;

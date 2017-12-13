import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Switch from './components/Switch'
import Switch2 from './components/Switch2'
import RadioGroup from './components/RadioGroup'
import SelectStaff from './components/SelectStaff'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      options: [
          { id: "haha", name: "haha" },
          { id: "heihei", name: "heihei" },
          { id: "hei", name: "hei" }

      ]
  }
    
  }
  handleSwitchChange(bol){
    console.log(bol)
  }
  handleRadioChange(val){
    console.log(val)

  }
  
  render() {
    const obj={id:"haha",name:"haha"}
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro" >
          <Switch2 handleSwitchChange={this.handleSwitchChange.bind(this)} defaultVal={true}/>
          <SelectStaff/>
        </div>
        <div style={{marginTop:100}}>
          <RadioGroup name="hhh" defaultVal={obj} options={this.state.options} handleRadioChange={this.handleRadioChange.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Switch2 from './components/Switch2'
import RadioGroup from './components/RadioGroup'
import CheckboxGroup from './components/CheckboxGroup'
import SelectStaff from './components/SelectStaff'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      options: [
          { id: "haha", name: "haha" },
          { id: "heihei", name: "heihei" },
          { id: "hei", name: "hei" },
          { id: "lol", name: "lol" },
          { id: "kkk", name: "kkk" }
      ],
      options2: [
        { id: "aaa", name: "aaa" },
        { id: "bbb", name: "bbb" },
        { id: "ccc", name: "ccc" },
        { id: "ddd", name: "ddd" },
        { id: "eee", name: "eee" }
    ]
  }
    
  }
  handleSwitchChange(bol){
    console.log(bol)
  }
  handleRadioChange(val){
    console.log(val)

  }
  handleCheckboxChange(val){
    console.log(val)

  }
  
  render() {
    const obj={id:"haha",name:"haha"}
    const obj2=[{ id: "aaa", name: "aaa" },{ id: "bbb", name: "bbb" }]
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
        <div style={{marginTop:100}}>
          <CheckboxGroup name="aaa" defaultVal={obj2} options={this.state.options2} handleCheckboxChange={this.handleCheckboxChange.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;

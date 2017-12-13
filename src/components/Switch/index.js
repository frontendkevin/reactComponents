import React,{Component} from 'react'
class Switch extends Component {
    constructor(){
        super() 
    
    }
    onSwitchChange(){
        let val=this.refs[this.props.name].checked;
        this.props.handleSwitchChange(val);

    }
   
    render(){
        return(
             <div className="checkbox-container">
                 <input type="checkbox" ref={this.props.name} name={this.props.name} id={this.props.name} className="chooseBtn" onChange={this.onSwitchChange.bind(this)}/>
                 <label htmlFor={this.props.name} className="choose-label"></label>
            </div>
        )
           
        
    }
}
export default Switch
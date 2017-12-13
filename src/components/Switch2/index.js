import React, { Component } from 'react'
import "./index.css"
export default class Switch extends Component {
    constructor() {
        super();
        this.state = { value: false }
    }
    componentDidMount(){
        this.setState({value:this.props.defaultVal})
    }
   componentWillReceiveProps(nextProps){
       if(this.props.defaultVal!==nextProps.defaultVal){
           this.setState({value:nextProps.defaultVal})
       }
   }
    handleSwitchChange(){
        const { value } = this.state
        const { disabled} = this.props
        if(disabled) return;
        this.props.handleSwitchChange(!value)
        this.setState({value:!value})
    }
    render() {
        const { value } = this.state;
        return (
            <div className={'background ' + (value ? 'on' : 'off')}>
                <div className='track' onClick={this.handleSwitchChange.bind(this)}>
                    <div className='thumb' />
                </div>
            </div>);
    };
}


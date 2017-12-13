import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "./index.css"

export default class RadioGroup extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        const {options,defaultVal} = this.props
        options.forEach((ele) => {
            if(ele.name===defaultVal.name){
                this.refs[ele.name].checked=true;
            }
        });
    }
    handleClick(index) {
        const { options } = this.props
        const selectedOptions = options[index]
        this.props.handleRadioChange(selectedOptions)
    }
    renderRadio(options) {
        return options.map((item, index) => {
            return (
                <div className="radio" key={item.name} >
                    <input type="radio" ref={item.name} id={item.name} name={this.props.name} />
                    <label htmlFor={item.name} onClick={this.handleClick.bind(this,index)}>{item.name}</label>
                </div>
            )

        })


    }
    render() {
        const { options } = this.props
        return (
            <div className="radio-group">
                {
                    this.renderRadio(options)
                }

            </div>
        )

    }

}
RadioGroup.propTypes = {
    name: PropTypes.string,
    defaultVal:PropTypes.object,
    options:PropTypes.array,
    handleRadioChange:PropTypes.func
  };
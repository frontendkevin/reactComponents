import React, {Component} from 'react'
import PropTypes from 'prop-types'
import "./SlectStaff.css"



class SelectStaff extends Component {
    constructor() {
        super()
        this.state={
            options:[],
            selectOptions:[]
        }  
    }

  
    render() {
        return (
            <div className="select-container">
                <div className="select-item">
                    <div className="select-option">选项</div>
                    <div className="delete-mark"></div>
                    <ul className="options-container">
                        <li>想想1</li>
                        <li>先想想2</li>
                    </ul>
                </div>
                
                <button className="btn-add">+</button>
            </div>
        )
    }
}
export default SelectStaff
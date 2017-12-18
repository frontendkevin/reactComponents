import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "./index.css"

export default class RadioGroup extends Component {
   
    componentDidMount() {
        const { options, defaultVal } = this.props
        options.forEach((ele) => {
            defaultVal.forEach(obj => {
                if (ele.name === obj.name) {
                    this.refs[ele.name].checked = true;
                }
            })

        });
    }
    handleClick() {
        setTimeout(() => {
            const { options } = this.props
            const selectedOptions = [];
            const bols = Object.values(this.refs).map(item => item.checked)
            bols.map((item, index) => {
                if (item === true) {
                    selectedOptions.push(options[index])
                }
            })

            this.props.handleCheckboxChange(selectedOptions)
        }, 0)

    }
    renderRadio(options) {
        return options.map((item, index) => {
            return (
                <div className="radio" key={item.name} >
                    <input type="checkbox" ref={item.name} id={item.name} name={this.props.name} />
                    <label htmlFor={item.name} onClick={this.handleClick.bind(this)}>{item.name}</label>
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
    defaultVal: PropTypes.array,
    options: PropTypes.array,
    handleRadioChange: PropTypes.func
};
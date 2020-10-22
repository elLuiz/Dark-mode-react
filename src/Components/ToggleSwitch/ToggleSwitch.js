import React, { Component } from 'react'
import '../../Styles/Components/ToggleSwitch/toggle.css';

export class ToggleSwitch extends Component {
    render() {
        return (
            <label className="toggle-switch">
                <input className="checkbox" type="checkbox"/>
                <span className="slider round"></span>
            </label>
        )
    }
}

export default ToggleSwitch

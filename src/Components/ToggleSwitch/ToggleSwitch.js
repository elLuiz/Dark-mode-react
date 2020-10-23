import React, { Component } from 'react'
import '../../Styles/Components/ToggleSwitch/toggle.css';
import Theme from '../../Context/Theme';
import setTheme from '../../Cookie/CookieTheme';

export class ToggleSwitch extends Component {
    static contextType = Theme;

    changeTheme = ()=>{
        const {theme, updateTheme} = this.context;
        if(theme==='light'){
            setTheme('dark')
            updateTheme('dark');
        }else{
            setTheme('light')
            updateTheme('light')
        }
    }

    render() {
        const {theme} = this.context
        return (
            <div className="toggle-switch-container">
                <label className="toggle-switch">         
                    {theme === 'light' && <input onChange={this.changeTheme} className="checkbox" type="checkbox"/>}
                    {theme === 'dark' && <input onChange={this.changeTheme} className="checkbox" type="checkbox" checked/>}
                    <span className="slider round"></span>
                </label>
            </div>
        )
    }
}

export default ToggleSwitch

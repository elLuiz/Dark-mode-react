import React, { Component } from 'react'
import Nav from '../Components/Nav/Nav'
import Theme from '../Context/Theme';
import '../Styles/Pages/index.css';


export class Index extends Component {
    static contextType = Theme;
    
    render() {
        console.log(this.context)
        return (
            <div className={this.context === 'light' ? "index-container" : "index-container index-dark-container"}>
                <Nav />
            </div>
        )
    }
}

export default Index

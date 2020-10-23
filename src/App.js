import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import Theme from './Context/Theme';
import { getTheme } from './Cookie/CookieTheme';

class App extends Component{
    constructor(props){
      super(props)
      this.state = {
        theme: ''
      }
    }

    componentDidMount(){
      this.setState({theme: getTheme()})
    }

    updateTheme = (theme)=>{
      this.setState({theme: theme})
    }
    render(){
        return (
          <Theme.Provider value={{theme: this.state.theme, updateTheme: this.updateTheme}}>
            <div className="App">
              <Routes />
            </div>
          </Theme.Provider>
      );
    }

}

export default App;

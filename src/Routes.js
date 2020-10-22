import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './Pages/Index';

export default function Routes(){
    return(
        <Router>
            <Route exact path="/" component={Index} />
        </Router>
    )
}
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/organism/header.jsx';
import Feet from './components/organism/footer.jsx';
import BodyIndex from './components/templates/bodyindex.jsx';
import BodyUs from './components/templates/bodyus.jsx';
import BodyContact from './components/templates/bodycontact.jsx';
import { Root } from './utils/global.js';
import { LABEL } from './utils/constants.js';
import { 
    FontSailecRegular, 
    FontSailecMedium, 
    FontSailecBold, 
    FontSailecLight, 
    FontHarmonyRegular, 
    FontHarmonyLite } from './fonts/fonts.js';

const elements = (
    <div>
        <Root/>
        <FontSailecRegular/>
        <FontSailecMedium/>
        <FontSailecBold/>
        <FontSailecLight/>
        <FontHarmonyRegular/>
        <FontHarmonyLite/>
        
        <Router>
            <Switch>

                <Route 
                    exact path='/'>
                    <Header selected={LABEL.initial}/>
                    <BodyIndex/>
                </Route>

                <Route 
                    path='/nosotros'>
                    <Header selected={LABEL.us}/>
                    <BodyUs/>
                </Route>

                <Route 
                    path='/contact'>
                    <Header selected={LABEL.contact}/>
                    <BodyContact/>
                </Route>

            </Switch>
        </Router>

        <Feet/>
    </div>
);

ReactDOM.render(elements, document.getElementById("root"));
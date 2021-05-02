import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/organism/header/header.jsx';
import Feet from './components/organism/footer/footer.jsx';
import BodyIndex from './components/templates/bodyindex/bodyindex.jsx';
import { 
    FontSailecRegular, 
    FontSailecMedium, 
    FontSailecBold, 
    FontSailecLight, 
    FontHarmonyRegular, 
    FontHarmonyLite } from './fonts/fonts.js'

const elements = (
    <div>
        <FontSailecRegular/>
        <FontSailecMedium/>
        <FontSailecBold/>
        <FontSailecLight/>
        <FontHarmonyRegular/>
        <FontHarmonyLite/>
        <Header></Header>
        <BodyIndex></BodyIndex>
        <Feet></Feet>
    </div>
);

ReactDOM.render(elements, document.getElementById("root"));
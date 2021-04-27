import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/organism/header/header.jsx';
import Feet from './components/organism/footer/footer.jsx';
import BodyIndex from './components/templates/bodyindex/bodyindex.jsx';

ReactDOM.render(
    <Header></Header>, 
    document.getElementById("header")
);

ReactDOM.render(
    <BodyIndex></BodyIndex>, 
    document.getElementById("bodyindex")
);

ReactDOM.render(
    <Feet></Feet>, 
    document.getElementById("feet")
);
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.jsx';
import Feet from './components/footer/footer.jsx';
import BodyIndex from './components/bodyindex/bodyindex.jsx';

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
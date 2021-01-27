import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.jsx';
import Feet from './components/footer/footer.jsx';
import Slider from './components/slider/slider.jsx';

ReactDOM.render(
    <Header></Header>, 
    document.getElementById("header")
);

ReactDOM.render(
    <Slider showBubble= {true}></Slider>, 
    document.getElementById("slider")
);

ReactDOM.render(
    <Feet></Feet>, 
    document.getElementById("feet")
);
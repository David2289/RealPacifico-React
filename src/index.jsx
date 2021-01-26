import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.jsx';
import Feet from './components/footer/footer.jsx';

ReactDOM.render(
    <Header></Header>, 
    document.getElementById("header")
);

ReactDOM.render(
    <Feet></Feet>, 
    document.getElementById("feet")
);
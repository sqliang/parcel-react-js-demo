import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import './main.scss';

import App from './pages/App';
import favicon from './assets/favicon.png';

ReactDOM.render(
    <div className="container">
        <img src={favicon}/>
        <App/>
    </div>,
    document.getElementById('app')
);
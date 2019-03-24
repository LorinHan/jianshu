import React from 'react'; 
import ReactDom from 'react-dom';
import './css/reset.css';
import './static/iconfont/iconfont.css';

import App from './components/App.jsx';
ReactDom.render(
    <App></App>,
    document.getElementById('app')
);
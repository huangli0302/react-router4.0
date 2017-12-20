import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom'
//import {BrowserRouter as Router , Route,withRouter,HashHistory} from 'react-router-dom';
import './index.css';
//import App from './App.jsx';
import 'rem.js';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import Routes from './route.js'
import 'antd-mobile/dist/antd-mobile.css';
//import Test from './Apptest.jsx'

// console.log(this);
//  fetch("http://10.112.68.79/portal/getResourceByUserName.do?userName=mayueqiao").then(res=>{
//     console.log(res);
//  });

 ReactDOM.render( (
        <Routes/>
), document.getElementById('root'));
registerServiceWorker();

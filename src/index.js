import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RecoilRoot } from 'recoil'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <RecoilRoot>
    <App />
    </RecoilRoot>
  </Router>,
  document.getElementById('root')
);
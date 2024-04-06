import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ethers from './Context/EthersContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searcher from './Context/SearchContext';
import { BrowserRouter as Router} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Searcher>
    <Ethers><App /></Ethers>
    </Searcher></Router>
  </React.StrictMode>
);

reportWebVitals();

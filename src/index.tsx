import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './00_layout/Layout';
import {BrowserRouter as Router} from 'react-router-dom';
import RouteMap from './routeMap';
import './style/style.css';

//* BigPicture
const App = () =>
    <Router>
        <Layout>
            {RouteMap}
        </Layout>
    </Router>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

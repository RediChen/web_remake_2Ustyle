import './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './ts/components/common/nav';
import HomeCarousel from './ts/components/homePage/homeCarousel';
const BigPicture = () =>
<>
  <Nav />
  <HomeCarousel />
</>

ReactDOM.render(
  <React.StrictMode>
    <BigPicture />
  </React.StrictMode>,
  document.getElementById('root')
);

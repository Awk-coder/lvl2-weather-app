import React from 'react';
import ReactDOM from 'react-dom/client';
import WeatherApp from './App';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherApp className="body"/>
  </React.StrictMode>
);

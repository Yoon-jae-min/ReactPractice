import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from "./Library";

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><Library/></React.StrictMode>);

reportWebVitals();
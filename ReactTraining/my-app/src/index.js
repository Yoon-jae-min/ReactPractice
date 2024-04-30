import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from './ch03/Hello';
import Library from './ch03/Library';
import Clock from './ch04/Clock';
import CommentList from './ch05/CommentList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CommentList/>)

reportWebVitals();

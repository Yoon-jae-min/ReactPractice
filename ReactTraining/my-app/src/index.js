import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from './ch03/Hello';
import Library from './ch03/Library';
import Clock from './ch04/Clock';
import CommentList from './ch05/CommentList';
import NotificationList from './ch06/NotificationList';
import Counter from './ch07/Counter';
import TextInput from './ch07/TextInputWithFocusButton';
import MeasureExample from './ch07/MeasureExample';
import Accommodate from './ch07/Accommodate';
import Toggle from './ch08/Toggle';
import ConfirmButton from './ch08/ConfirmButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ConfirmButton />)

reportWebVitals();

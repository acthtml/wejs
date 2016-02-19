import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page/Page';
import './Button/Button.css';

document.querySelector('.page').setAttribute('a', '111')

ReactDOM.render(<Page />, document.getElementById('wrapper'));

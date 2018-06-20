import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'normalize.css';
import 'flexboxgrid2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render (<App />, document.getElementById ('root'));
registerServiceWorker ();

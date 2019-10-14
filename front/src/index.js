import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import "@brainhubeu/react-carousel/lib/style.css";
import 'bulma/css/bulma.css';
import './index.css';

ReactDOM.render(<Router><App  /></Router>, document.getElementById('root'));

serviceWorker.unregister();

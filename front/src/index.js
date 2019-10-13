import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
// import bulmaCarousel from '~bulma-carousel/dist/js/bulma-carousel.min.js';
import 'bulma/css/bulma.css';
// import '~bulma-carousel/dist/css/bulma-carousel.min.css';
import './index.css';

ReactDOM.render(<Router><App  /></Router>, document.getElementById('root'));

serviceWorker.unregister();

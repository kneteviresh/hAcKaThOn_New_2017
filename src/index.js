/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import routes from './routes';
import { Router } from 'react-router';
require('./favicon.ico'); 


render(
    <Router history={browserHistory} routes={routes} />,
   document.getElementById("root")
)
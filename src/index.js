import './reset.css';
import {addGuess, toggleInstructions, newGame} from './actions/index';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

import './reset.css';
import './index.css';

console.log(store.getState())

import Game from './components/game';

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
    document.getElementById('root')
);

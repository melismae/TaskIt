import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import persistState from 'redux-localstorage';
import App from './components/app';
import reducers from './reducers';
// import { css } from './style/main.css';


const createStoreWithMiddleware = applyMiddleware()(createStore);

// for local storage (redux-localstorage)
const enhancer = compose(persistState());

render(
    <Provider store={createStoreWithMiddleware(reducers, window.devToolsExtension && window.devToolsExtension(), enhancer)}>
        <App />
      </Provider>,document.getElementById('app'));

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
    <Provider store={createStoreWithMiddleware(reducers, window.devToolsExtension && window.devToolsExtension())}>
        <App />
      </Provider>,document.getElementById('app'));

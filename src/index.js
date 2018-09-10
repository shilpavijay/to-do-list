import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import reducers from './store'
import { createStore } from 'redux'
import 'bulma/css/bulma.css'

const store = createStore(reducers)

const Root = ({ store }) => (
    <Provider store={store}>
        <App />
    </Provider>

)

render(
    <Root store={store} />,
    document.getElementById('root')
)
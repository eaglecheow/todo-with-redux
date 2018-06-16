import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { reduce } from './redux/reducers';

const store = createStore(reduce, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let AppComponent = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(AppComponent, document.getElementById('root'));
registerServiceWorker();

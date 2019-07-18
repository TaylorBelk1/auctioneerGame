import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { createStore, applyMiddleware } from "redux";
import { createStore } from "redux";
// import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./reducers/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(
    rootReducer,
    composeWithDevTools(),
);

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>
, document.getElementById('root'));


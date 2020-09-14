import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeatMap from './components/HeatMap/HeatMap';
import Header from './components/Header/Header';
import store from './store';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Route exact path="/" render={props =>  (
                    <HeatMap />
                )} />
            </Router>
        </Provider>
    );
}

export default App;

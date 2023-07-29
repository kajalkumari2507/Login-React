import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import Login from './Login';
import Profile from './Profile';
import store from './store';
import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="./profile" element={<Profile />} />
                </Routes>

            </Router>
        </Provider>
    );
};

export default App;

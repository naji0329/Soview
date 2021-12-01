import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Transaction from './components/Transaction/Dashboard';
import Pair from './components/Pair/Dashboard';

import './style.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {

  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Pair />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

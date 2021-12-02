import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// import Transaction from './components/Transaction/Dashboard';
// import Pair from './components/Pair/Dashboard';
import Header from './components/Layout/Header';
import Menu from './components/Layout/Menu';
import 'material-icons/iconfont/material-icons.css';
//Market Place
import Chart from './components/Marketplace/Chart';

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
        <div>
          <div className="naji-menu-div">
            <Menu />
          </div>
          <div className="naji-body-div">
            <Header />
            <Routes>
              <Route path="/" element={<Chart />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Transaction from './Transaction';
import { getLatestTransactions } from '../../actions/transaction';

const Dashboard = ({  
  getLatestTransactions,
  transaction
}) => {
  const queryParams = new URLSearchParams(window.location.search);
  useEffect(() => {
    getLatestTransactions(queryParams.get('pairAddress'));
  }, [getLatestTransactions]);

  return (
    <section className="naji-container">
      <div className="naji-cbody"> 
        <h2>Transactions</h2>
        {/* <br />
        <span>Search: <input type="text" className="m-input naji-searchText" id="searchText" /><button id="searchBtn">Search</button></span> */}
        <hr />
        <Transaction transaction={transaction.transactions} getLatestTransactions = {getLatestTransactions} />
      </div>
    </section>
  );
};

Dashboard.propTypes = {
  getLatestTransactions: PropTypes.func.isRequired,
  transaction: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  transaction: state.transaction
});

export default connect(mapStateToProps, { getLatestTransactions })(
  Dashboard
);

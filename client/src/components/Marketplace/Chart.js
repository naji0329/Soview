import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ChartPrice from './ChartPrice';
import ChartTransaction from './ChartTransaction';
import PromtoedToken from './PromtoedToken.js';

import { getLatestTransactions } from '../../actions/transaction';

const Chart = ({  
  getLatestTransactions,
  transaction
}) => {
  useEffect(() => {
    getLatestTransactions("8TpLegYhGc5z3PAJonMH6feHChy719xtiS17pLyzUnp4");
  }, [getLatestTransactions]);


  return (
    <section>
      <div className="naji-chart-container">
        <div className="naji-chart-price-buy-sell">
          <ChartPrice />
        </div>
      </div>

      <div className="naji-chart-two-table">
        <div className="naji-chart-transaction-table-div">
          <ChartTransaction transaction={transaction.transactions} getLatestTransactions = {getLatestTransactions} />
        </div>
        <div className="naji-chart-promote-token-table-div">
          <PromtoedToken />
          </div>
      </div>
    </section>
  );
};

Chart.propTypes = {
  getLatestTransactions: PropTypes.func.isRequired,
  transaction: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  transaction: state.transaction
});

export default connect(mapStateToProps, { getLatestTransactions })(
  Chart
);

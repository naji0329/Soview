import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Transaction = ({ transaction, getLatestTransactions }) => {
  const queryParams = new URLSearchParams(window.location.search);
  const base = queryParams.get('base');
  const quote = queryParams.get('quote');
  const transactions = transaction.map((tra) => (
   tra.base ?  <tr key={tra.updatedAt}>
        <td>{ base == tra.base.symbol ? "SELL" : "BUY" }</td>
        <td>{tra.updatedAt}</td>
        <td>{tra.volume} { tra.base.symbol}</td>
        <td>{parseFloat(tra.volumeUSD) / parseFloat(tra.volume) } USD</td>
        <td>{tra.volumeUSD} {tra.quote.symbol}</td>
        <td>Raydium</td>
    </tr> : <></>
  ));

  return (
    <Fragment>
      <table className="naji-table">
        <thead>
          <tr>
            <th></th>
            <th>TIME</th>
            <th>TRADED</th>
            <th>TOKEN PRICE</th>
            <th>BUY/SELL</th>
            <th>DEX</th>
          </tr>
        </thead>
        <tbody>
          {transactions}
        </tbody>
      </table>
      <div className="roadmoreDiv">
        <button id="btn-loadmore"  onClick={() => getLatestTransactions(queryParams.get('pairAddress'))}>Load More</button>
      </div>
    </Fragment>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.array.isRequired,
};

export default connect(null)(Transaction);

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Pair = ({ pair }) => {
  const pairs = pair.map((row) => (
    row.base ?  <tr key={row.address}>
        <td className="cursor-pointer"><Link className="naji-pair-cursor" to={`/transaction?pairAddress=${row.address}&base=${row.base.symbol}&quote=${row.quote.symbol}`}>{row.base.symbol} - {row.quote.symbol}</Link></td>
        <td>{parseFloat(row.price).toFixed(5)}</td>
        <td>{parseFloat(row.liquidity).toFixed(2)}</td>
        <td>{ parseFloat(row.liquidityChangePercentage24h).toFixed(2) }%</td>
        <td>{parseFloat(row.volume24h).toFixed(2)}</td>
        <td>{ parseFloat(row.volume24hChangePercentage24h).toFixed(2) }%</td>
        <td>{row.lastTradeHumanTime}</td>
        <td>Trade</td>
    </tr> : <></>
  ));
  
  return (
    <Fragment>
      <table className="naji-table">
        <thead>
          <tr>
            <th>Pair</th>
            <th>Price</th>
            <th>TVL</th>
            <th></th>
            <th>Volume 24h</th>
            <th></th>
            <th>Last trade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pairs}
        </tbody>
      </table>
    </Fragment>
  );
};

Pair.propTypes = {
  pair: PropTypes.array.isRequired,
};

export default connect(null)(Pair);

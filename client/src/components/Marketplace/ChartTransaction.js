import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TradeUp from "../../img/trade-up.png";
import TokenInfo from "../../img/token-info.png";
import Sell from '../../img/sell.png';

const ChartTransaction  = ({ transaction, getLatestTransactions }) => {

  const differenceInMinutes = (dateVal) => {
    let dateOne = new Date();
    let dateTwo = new Date(dateVal);

    let msDifference =  dateTwo - dateOne;
    let minutes = Math.floor(msDifference/1000/60);
    return minutes * -1;
  }
    // const queryParams = new URLSearchParams(window.location.search);
    // const base = queryParams.get('base');
    // const quote = queryParams.get('quote');
  const transactions = transaction.map((tra) => (
    tra.base ?  <tr key={tra.updatedAt}>
        <td className="buy-sell-img"><img src={Sell} />  { differenceInMinutes(tra.updatedAt) }m ago</td>
        <td>{tra.volume.toFixed(3)} <span className="lightdark">{tra.base.symbol}</span></td>
        <td>{  tra.basePrice.toFixed(4) }  <span className="lightdark">USD</span></td>
        <td>{tra.volumeUSD.toFixed(3)} <span className="lightdark">{tra.quote.symbol}</span></td>
        <td> <span className="naji-chart-transaction-table-dex-text">Raydium</span></td>
    </tr> : <></>
  ));

  return (
    <Fragment>
      <div className="naji-chart-transaction-header-div">
        <p className="naji-chart-transaction-trade-btn"><img src={TradeUp} /> <span>Trades</span></p>
        <p className="naji-chart-transaction-token-info-btn"><img src={TokenInfo} /> Token Info</p>
      </div>
      {/* <hr /> */}
      <table className="naji-transaction-table ">
        <thead>
          <tr>
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
      {/* <div className="roadmoreDiv">
        <button id="btn-loadmore"  onClick={() => getLatestTransactions("8TpLegYhGc5z3PAJonMH6feHChy719xtiS17pLyzUnp4")}>Load More</button>
      </div> */}
    </Fragment>
  );
};

ChartTransaction.propTypes = {
};

export default connect(null, {  })(ChartTransaction);

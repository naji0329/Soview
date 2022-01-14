import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Solvimg from '../../img/solv.png';
import buyicon from '../../img/buy.png';

const ChartPrice = ({  }) => {
  return (
    <Fragment>


      <div className="naji-chart-main-price-div">
        <img src={Solvimg} className="naji-chart-main-price-img" />
        <div className="naji-chart-main-price-value-div">
          <div className="naji-chart-main-price-dropdown-div">
            <p>Solview <span className="material-icons">keyboard_arrow_down</span></p>
          </div>
          <div className="naji-chart-main-price-price-div">
              <p className="naji-chart-main-price-price1">$0.75723</p>
              <p className="naji-chart-main-price-price2"><span className="material-icons">trending_up</span> 7.89%</p>
          </div>
        </div>
      </div>
      <div className="naji-chart-price-clearfix"></div>
      <div className="naji-chart-sub-price-div">
        <div className="naji-chart-sub-price-item-div">
          <p className="naji-chart-sub-price-type">24h Volume</p>
          <p className="naji-chart-sub-price-value">$99,185</p>
        </div>
      </div>
      <div className="naji-chart-sub-price-div">
        <div className="naji-chart-sub-price-item-div">
          <p className="naji-chart-sub-price-type">Liquidity</p>
          <p className="naji-chart-sub-price-value">$3.387M </p>
        </div>
      </div>
      <div className="naji-chart-sub-price-div">
        <div className="naji-chart-sub-price-item-div">
          <p className="naji-chart-sub-price-type">Marketcap</p>
          <p className="naji-chart-sub-price-value">$10.731M</p>
        </div>
      </div>
      <div className="naji-chart-price-clearfix"></div>

      <div className="naji-chart-sub-price-div">
        <div className="naji-chart-sub-price-item-div">
          <p className="naji-chart-sub-price-type">Total Holders</p>
          <p className="naji-chart-sub-price-value">5960 </p>
        </div>
      </div>

      <div className="naji-chart-sub-price-div">
        <div className="naji-chart-sub-price-item-div">
          <p className="naji-chart-sub-price-type">Max Supply</p>
          <p className="naji-chart-sub-price-value">1000.00</p>
        </div>
      </div>
      <div className="naji-chart-price-clearfix"></div>
      <div className="naji-chart-buy-sell-div">
        <p className="naji-chart-buy-sell-btn">
          <img src={buyicon} />
          Buy
        </p>
        <p className="naji-chart-buy-sell-btn">
          <img src={buyicon} />
          Buy
        </p>
      </div>
    </Fragment>
  );
};

ChartPrice.propTypes = {
};

export default connect(null, {  })(ChartPrice);

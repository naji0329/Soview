import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PromotedTokenimg from '../../img/promoted-token.png';
import Trendingimg from '../../img/trending.png';
import MostViewed from '../../img/most-viewed.png';

const PromotedToken = ({  }) => {
  return (
    <Fragment>
      <div className="naji-chart-promotedtoken-header-div">
        <p className="naji-chart-promotedtoken-trade-btn"><img src={PromotedTokenimg} /> <span>Promoted</span></p>
        <p className="naji-chart-promotedtoken-token-info-btn"><img src={Trendingimg} /> Trending</p>
        <p className="naji-chart-promotedtoken-most-viewed-btn"><img src={MostViewed} /> Most Viewed</p>
      </div>
      <table className="naji-promoted-table">
        <thead>
          <tr>
            <th><span className="naji-chart-promotedtoken-load-more-btn">PROMOTED</span></th>
            <th>PRICE</th>
            <th>MCAP</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
      <div className="roadmoreDiv">
        <p className="naji-chart-promotedtoken-load-more-btn">Load More</p>
      </div>
    </Fragment>
  );
};

PromotedToken.propTypes = {
};

export default connect(null, {  })(PromotedToken);

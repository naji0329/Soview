import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Header = ({  }) => {
  return (
    <section className="naji-header">
      <div className="naji-header-search-div">
        <span className="material-icons naji-header-search-icon">search</span>
        <input type="text" className="naji-header-search" placeholder="Search market or enter a token access..." />   
      </div>

      <div className="naji-header-function-div">
        <span className="naji-header-circle-btn">USD <span className="material-icons naji-header-refresh-icon">cached</span></span>

        <span className="naji-header-balance-btn"><span className="material-icons naji-header-balance-icon">incomplete_circle</span> <span className="naji-header-balance-value">$0.757</span></span>

        <span className="naji-header-setting-btn"><span className="material-icons-outlined">settings</span><p className="naji-header-setting-dot"></p></span>

        <div className="naji-header-connect-wallet-div">
          <input type="button" className="naji-header-connect-wallet-btn" value="Connect Wallet" />
        </div>

      </div>
    </section>
  );
};

Header.propTypes = {
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {  })(Header);

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MaterialIcon, {colorPalette} from 'material-icons-react';

import logopolygon from '../../img/polygon.png'

const Menu = ({  }) => {
  return (
    <section className="naji-menu">
      <div className="naji-menu-logo-div">
        <img src={logopolygon} className="naji-menu-logo" />
        <p className="naji-menu-title"><b>Solview</b><span className="naji-menu-title-dot">.</span></p>
      </div>
      <div>
        <p className="naji-menu-subtitle">Marketplace</p>

        <p className="naji-menu-item"><span className="material-icons naji-menu-item-icon active">assessment</span> Chart</p>
        <p className="naji-menu-item"><span className="material-icons-outlined naji-menu-item-icon">explore</span>Token Explorer</p>
        <p className="naji-menu-item"><span className="material-icons-outlined naji-menu-item-icon">campaign</span>Promote Token</p>
        <p className="naji-menu-item"><span className="material-icons naji-menu-item-icon">swap_vert</span>Swap</p>
        
        <div className="naji-menu-clearfix"></div>

        <p className="naji-menu-subtitle">Your Portfolio</p>

        <p className="naji-menu-item"><span className="material-icons naji-menu-item-icon">grid_view</span>Dashboard</p>
        <p className="naji-menu-item"><span className="material-icons naji-menu-item-icon">explore</span>NFT Gallery</p>

        <div className="naji-menu-clearfix"></div>

        <p className="naji-menu-subtitle">Earn With Us</p>

        <p className="naji-menu-item"><span className="material-icons naji-menu-item-icon">candlestick_chart</span>Staking</p>
        <p className="naji-menu-item"><span className="material-icons naji-menu-item-icon">inbox</span>Farming </p>
      </div>

    </section>
  );
};

Menu.propTypes = {
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {  })(Menu);

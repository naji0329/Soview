import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPairs } from '../../actions/pair';
import Pair from './Pair';

const Dashboard = ({  
  getPairs,
  searchText,
  setAddress,
  pair
}) => {
  useEffect(() => {
    getPairs(searchText);
  }, [getPairs]);


  const onChange = (e) => {
    searchText = e.target.value;
  }

  return (
    <section className="naji-container">
      <div className="naji-cbody"> 
        <h2>Pair Lists</h2>
        <br />
        <span>
          Search: 
          <input type="text" className="m-input naji-searchText" id="searchText" value={searchText} onChange={onChange} />
          <button id="searchBtn" className="naji-searchBtn" onClick={() => getPairs(searchText)}>Search</button></span>
        <hr />
        <Pair pair={pair.pairs}/>
      </div>
    </section>
  );
};

Dashboard.propTypes = {
  getPairs: PropTypes.func.isRequired,
  pair: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  pair: state.pair
});

export default connect(mapStateToProps, { getPairs })(
  Dashboard
);

/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import Clock from './Clock.jsx';
import { testAction } from '../services/actions';
/* eslint-ensable no-unused-vars */

const mapStateToProps = state => ({
  hola: state.hola,
});

const mapDispatchToProps = dispatch => ({
  dispatchTestAction: () => {
    dispatch(testAction());
  },
});

const App = (props) => {
  const {
    hola,
    dispatchTestAction,
  } = props;
  return (
    <div className='dashboard'>
      <div className='clock'>
        <Clock />
      </div>
      <div className='photo'></div>
      <div className='app'></div>
      <div className='app-picker'></div>
      <div className='todo'></div>
    </div>
  );
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;

import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { AppWrap } from './styles/style';
import Main from './components/main';

function App() {
  return (
    <AppWrap>
      <Main />
    </AppWrap>
  );
}

const mstp = state => {
  return {
    items: state.items,
    compPlayer: state.compPlayer,
    livePlayer: state.livePlayer
  }
}

export default connect(mstp, {})(App);

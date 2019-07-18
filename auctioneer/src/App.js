import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { AppWrap } from './styles/style';
import MainGame from './components/Game/main-game';
import { Route } from 'react-router-dom';
import PickAnItem from './components/ItemToBidOn/main-pick-item';


function App() {
  return (
    <AppWrap>
      <Route exact path='/' component={PickAnItem} />
      <Route exact path='/:id' component={MainGame} />
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

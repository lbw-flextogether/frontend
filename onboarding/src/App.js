import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import Start from './components/Start';
import Info from './components/Info';
import Time from './components/Time';
import BuddyInfo from './components/Buddy/BuddyInfo';
import Complete from './components/Complete';
import BuddyVerify from './components/Buddy/BuddyVerify';
import BuddyConfirm from './components/Buddy/BuddyConfirm';
import BuddyComplete from './components/Buddy/BuddyComplete';
import Manual from './components/Manual';
import './assets/styles/App.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="appContainer">
        <Route exact path="/" component={Welcome} />
        <Route path="/start" component={Start} />
        <Route path="/info" component={Info} />
        <Route path="/time" component={Time} />
        <Route path="/buddyinfo" component={BuddyInfo} />
        <Route path="/complete" component={Complete} />
        <Route path="/verify" component={BuddyVerify} />
        <Route path="/confirm" component={BuddyConfirm} />
        <Route path="/buddycomplete" component={BuddyComplete} />
        <Route path="/manual" component={Manual} />
        </div>
      </Router>
    );
  }
}

export default App;

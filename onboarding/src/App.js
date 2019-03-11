import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import Start from './components/Start';
import Info from './components/Info';
import Time from './components/Time';

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
        <Route exact path="/" component={Welcome} />
        <Route path="/start" component={Start} />
        <Route path="/info" component={Info} />
        <Route path="/time" component={Time} />
        </>
      </Router>
    );
  }
}

export default App;

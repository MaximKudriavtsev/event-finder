import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Home from '../components/home';
import About from '../components/about';
import Auth from '../components/auth';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/auth/" component={Auth} />
      </Router>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state
  }
};

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(App);

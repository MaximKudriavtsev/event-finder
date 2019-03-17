import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/home';
import About from '../components/about';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
      </Router>
    );
  }
}

export default App;

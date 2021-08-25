import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// CSS Styles
import './index.css'

// Components
import Header from './components/Header';
import About from './components/About';
import Articles from './components/Articles';
import Projects from './components/Projects';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
            <Route exact path="/" component={Projects} />
            <Route exact path="/articles" component={''} />
            <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

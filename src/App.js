import React from 'react';
import { BrowserRouter as Router, withRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';

// CSS Styles
import './index.css'

// Components
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import { NavBar } from './components/navbar';



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/projects" />} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/:id" render={({match}) => <ProjectDetails id={match.params.id} />} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default withRouter(App);

import React from 'react';
import { BrowserRouter as Router, withRouter, Route, Switch, Redirect } from 'react-router-dom';


// CSS Styles
import './index.css'

// Components
import Header from './components/Header';
import About from './components/About';
// import Articles from './components/Articles';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/projects" />} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/:id" render={({match}) => <ProjectDetails id={match.params.id} />} />
            {/* <Route exact path="/articles" component={''} /> */}
            <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default withRouter(App);

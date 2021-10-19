import './App.css';
import React from 'react';
import NotFound from './components/NotFound'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Form from './pages/Form.jsx';

function App() {
  return (
    <>
      <Router basename='/student-card-react'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={Form} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from './components/Container';
import CardDetails from './components/CardDetails';

class App extends Component {
  render() {
    return (
    	<Router>
      	<div className="App">
      		<Switch>
              <Route exact path='/' component={Container}/>
              <Route exact path='/details/:id' component={CardDetails}/>
            </Switch>
      	</div>
      </Router>
    );
  }
}

export default App;
import React from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>

        <Nav />
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route path="/shop" component={Shop}/>
        </Switch>

      </div>
    </Router>
  );
}
const Home=()=>(
  <div>
    <h1>Home pages</h1>
  </div>
);



export default App;

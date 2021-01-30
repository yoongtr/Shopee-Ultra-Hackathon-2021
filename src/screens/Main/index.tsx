import * as React from 'react';

// Components
import { Link, LinkBack } from 'libraries/components/Link';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Stylings
import './styles.scss';

import Navbar from 'screens/Navbar';
import Home from 'screens/Home';

// import FoodComponent from 'screens/FoodComponent';


function Main() {
  // Start creating your awesome app here
  return (
    <div>
      <Navbar />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/be-an-influencer' component={Home} />
            {/* <Route path='/food' component={FoodComponent} /> */}
          </Switch>
      </Router>
    </div>

  );
}

export default Main;
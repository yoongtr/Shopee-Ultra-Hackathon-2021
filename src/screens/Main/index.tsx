import * as React from 'react';

// Components
import { Link, LinkBack } from 'libraries/components/Link';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Stylings
import './styles.scss';

import Navbar from 'screens/Navbar';
import Home from 'screens/Home';
import FoodComponent from 'screens/FoodComponent';
import FashionComponent from 'screens/FashionComponent';
import CNYComponent from 'screens/CNYComponent';
import CheeseCakeComponent from 'screens/Food1';
import CreamCheeseCompare from 'screens/CreamCheeseCompare';
import StrawberryCompare from 'screens/StrawberryCompare';
import SugarCompare from 'screens/SugarCompare';
import { Jumbotron } from 'reactstrap';

// import FoodComponent from 'screens/FoodComponent';


function Main() {
  // Start creating your awesome app here
  return (
    <div>
      <Navbar />
      <Jumbotron></Jumbotron>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/be-an-influencer' component={Home} />
            <Route path='/food' component={FoodComponent} />
            <Route path='/fashion' component={FashionComponent} />
            <Route path='/cny' component={CNYComponent} />
            <Route path='/food1' component={CheeseCakeComponent} />
            <Route path='/compare-creamcheese' component={CreamCheeseCompare} />
            <Route path='/compare-strawberry' component={StrawberryCompare} />
            <Route path='/compare-sugar' component={SugarCompare} />
            
          </Switch>
      </Router>
    </div>

  );
}

export default Main;

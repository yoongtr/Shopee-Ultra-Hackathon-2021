import * as React from 'react';

// Components
import { Link, LinkBack } from 'libraries/components/Link';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Stylings
import './styles.scss';

import Navbar from 'screens/Navbar';
import Home from 'screens/Home';
import InfluencerForm from 'screens/InfluencerForm';
import FoodComponent from 'screens/FoodComponent';
import FashionComponent from 'screens/FashionComponent';
import CNYComponent from 'screens/CNYComponent';
import CheeseCakeComponent from 'screens/b-Food1';
import CreamCheeseCompare from 'screens/b-Food1-CreamCheese';
import StrawberryCompare from 'screens/b-Food1-Strawberry';
import SugarCompare from 'screens/b-Food1-Sugar';
import SushiComponent from 'screens/a-Food2';
import RiceCompare from 'screens/a-Food2-Rice';
import SalmonCompare from 'screens/a-Food2-Salmon';
import SeaweedCompare from 'screens/a-Food2-Seaweed';
import Fashion1 from 'screens/c-Fashion1';
import CardiganCompare from 'screens/c-Fashion1-Cardigan';
import SunglassesCompare from 'screens/c-Fashion1-Sunglasses';
import ShoesCompare from 'screens/c-Fashion1-Shoes';
import Fashion2 from 'screens/c-Fashion 2';
import JeansCompare from 'screens/c-Fashion 2-Jeans';
import ShirtCompare from 'screens/c-Fashion 2-Shirt';
import WatchCompare from 'screens/c-Fashion 2-Watch';
import CNY1Component from 'screens/d-CNY1';
import AngbaoCompare from 'screens/d-CNY1-Angbao';
import BakkwaCompare from 'screens/d-CNY1-Bakkwa';
import PineappleTartCompare from 'screens/d-CNY1-PineappleTart';
import CNY2Component from 'screens/d-CNY2';
import CarpetCompare from 'screens/d-CNY2-Carpet';
import CushionCompare from 'screens/d-CNY2-Cushion';
import VaseCompare from 'screens/d-CNY2-Vase';
// import FoodComponent from 'screens/FoodComponent';


function Main() {
  // Start creating your awesome app here
  return (
    <div>
      <Navbar />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/be-an-influencer' component={InfluencerForm} />
            <Route path='/food' component={FoodComponent} />
            <Route path='/fashion' component={FashionComponent} />
            <Route path='/cny' component={CNYComponent} />
            <Route path='/food1' component={CheeseCakeComponent} />
            <Route path='/compare-creamcheese' component={CreamCheeseCompare} />
            <Route path='/compare-strawberry' component={StrawberryCompare} />
            <Route path='/compare-sugar' component={SugarCompare} />
            <Route path='/food2' component={SushiComponent} />
            <Route path='/compare-rice' component={RiceCompare} />
            <Route path='/compare-salmon' component={SalmonCompare} />
            <Route path='/compare-seaweed' component={SeaweedCompare} />
            <Route path='/fashion1' component={Fashion1} />
            <Route path='/compare-cardigan' component={CardiganCompare} />
            <Route path='/compare-sunglasses' component={SunglassesCompare} />
            <Route path='/compare-shoes' component={ShoesCompare} />
            <Route path='/fashion2' component={Fashion2} />
            <Route path='/compare-jeans' component={JeansCompare} />
            <Route path='/compare-shirt' component={ShirtCompare} />
            <Route path='/compare-watch' component={WatchCompare} />
            <Route path='/cny1' component={CNY1Component} />
            <Route path='/compare-angbao' component={AngbaoCompare} />
            <Route path='/compare-bakkwa' component={BakkwaCompare} />
            <Route path='/compare-pineappletart' component={PineappleTartCompare} />
            <Route path='/cny2' component={CNY2Component} />
            <Route path='/compare-carpet' component={CarpetCompare} />
            <Route path='/compare-cushion' component={CushionCompare} />
            <Route path='/compare-vase' component={VaseCompare} />
            
          </Switch>
      </Router>
    </div>

  );
}

export default Main;
